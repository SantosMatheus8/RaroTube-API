import { CreateComentarioDTO } from "../../@types/dto/ComentarioDTO";
import { Comentario } from "../../models/comentario";
import { Video } from "../../models/video";

export interface IComentarioRepository {
  criar({ video, usuario, conteudo }: CreateComentarioDTO): Promise<Comentario>;
  remover(id: string): Promise<void>;
  buscar(id: string): Promise<Comentario>;
  listar(video: Video): Promise<Comentario[]>;
  atualizar(
    id: string,
    { video, usuario, conteudo }: Partial<Comentario>
  ): Promise<Comentario>;
}
