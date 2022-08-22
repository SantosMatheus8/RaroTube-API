import { Inject, Service } from "typedi";
import { IGetProfessorTurmaByProfessorIdService } from "../../@types/services/IProfessorTurmaService";
import { IProfessorTurmaRepository } from "../../@types/repositories/IProfessorTurmaRepository";
import { NotFoundError } from "../../@types/errors/NotFoundError";
import {
  QueryProfessorTurmas,
  RetornoListaProfessorTurmas,
} from "../../@types/dto/ProfessorTurmaDTO";
import { IProfessorRepository } from "../../@types/repositories/IProfessorRepository";

@Service("GetProfessorTurmaByProfessorIdService")
export class GetProfessorTurmaByProfessorIdService
  implements IGetProfessorTurmaByProfessorIdService
{
  constructor(
    @Inject("ProfessorTurmaRepository")
    private professorTurmaRespository: IProfessorTurmaRepository,
    @Inject("ProfessorRepository")
    private professorRespository: IProfessorRepository
  ) {}

  async execute(
    queryProfessorTurma: QueryProfessorTurmas
  ): Promise<RetornoListaProfessorTurmas> {
    const { professorId } = queryProfessorTurma;

    const professor = await this.professorRespository.buscarPorUsuarioId(
      professorId
    );

    if (!professor) {
      throw new NotFoundError("O professor informado não existe");
    }

    const query = this.constroiQueryPadrao(queryProfessorTurma);

    const [professoresTurmas, total] =
      await this.professorTurmaRespository.listar(query);

    const turmas = professoresTurmas.map((favorito) => favorito.turma);

    return {
      data: turmas,
      meta: {
        page: query.page,
        per: query.per,
        total: total,
      },
    };
  }

  private constroiQueryPadrao(
    query: QueryProfessorTurmas
  ): QueryProfessorTurmas {
    return {
      professorId: query.professorId,
      nomeProfessor: query.nomeProfessor || "",
      nomeTurma: query.nomeTurma || "",
      page: query.page > 0 ? query.page : 1,
      per: query.per > 0 ? query.per : 20,
      orderBy: query.orderBy || "professorId",
      orderDirection: query.orderDirection || "ASC",
    };
  }
}
