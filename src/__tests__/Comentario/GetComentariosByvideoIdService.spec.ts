import { VideoRepositoryInMemory } from "../../repositories/in-memory/VideoRepositoryInMemory";
import { UsuarioRepositoryInMemory } from "../../repositories/in-memory/UsuarioRepositoryInMemory";
import { TurmaRepositoryInMemory } from "../../repositories/in-memory/TurmaRepositoryInMemory";
import { ComentarioRepositoryInMemory } from "../../repositories/in-memory/ComentarioRepositoryInMemory";
import { NotFoundError } from "../../@types/errors/NotFoundError";
import { GetComentariosByVideoIdService } from "../../services/ComentarioServices/GetComentariosByVideoIdService";

let getComentariosByVideoIdService: GetComentariosByVideoIdService;
let videoRepository: VideoRepositoryInMemory;
let usuarioRepository: UsuarioRepositoryInMemory;
let turmaRepository: TurmaRepositoryInMemory;
let comentarioRepository: ComentarioRepositoryInMemory;

describe("CreateComentarioService", () => {
  beforeEach(() => {
    videoRepository = new VideoRepositoryInMemory();
    turmaRepository = new TurmaRepositoryInMemory();
    usuarioRepository = new UsuarioRepositoryInMemory();
    comentarioRepository = new ComentarioRepositoryInMemory();

    getComentariosByVideoIdService = new GetComentariosByVideoIdService(
      comentarioRepository,
      videoRepository
    );
  });

  it("Um comentário deve ser criado", async () => {
    const turma = await turmaRepository.criar({
      nome: "Turma NodeJS",
      descricao: "Segunda turma de NodeJS",
      logoDoCurso: "./upload/42380523yhr2304238f2",
    });

    const video = await videoRepository.criar({
      turma,
      nome: "Git/Git Flow",
      descricao:
        "O video aborda os principais comandos git e a importância de usar o gitflow",
      arquivoDoVideo: "./upload/42380523yhr2304238f2",
      imagemBanner: "./upload/34jkrf2j3kfma04ds",
    });

    const usuario = await usuarioRepository.cadastrar({
      email: "email@email.com",
      nome: "Matheus",
      fotoPerfil: "./upload/42380523yhr",
      senha: "123456",
    });

    comentarioRepository.criar({
      video,
      usuario,
      conteudo: "Gostei do video",
    });

    comentarioRepository.criar({
      video,
      usuario,
      conteudo: "Com certeza verei novamente",
    });

    const comentarios = await getComentariosByVideoIdService.execute(video.id);

    expect(comentarios[0].conteudo).toBe("Gostei do video");
    expect(comentarios[1].conteudo).toBe("Com certeza verei novamente");
  });

  it("Deve retornar o erro de video não encontrado", async () => {
    const comentario = await getComentariosByVideoIdService
      .execute("123")
      .catch((error) => error);

    expect(comentario).toBeInstanceOf(NotFoundError);
  });
});
