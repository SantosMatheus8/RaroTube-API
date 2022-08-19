import { IProfessorTurmaRepository } from "../@types/repositories/IProfessorTurmaRepository";
import { EntityRepository, Repository, ILike, getRepository } from "typeorm";
import { ProfessorTurma } from "../models/professor_turma";
import {
  CreateProfessorTurmaDTO,
  QueryProfessorTurmas,
} from "../@types/dto/ProfessorTurmaDTO";

@EntityRepository(ProfessorTurma)
export class ProfessorTurmaRepository implements IProfessorTurmaRepository {
  private repository: Repository<ProfessorTurma>;

  constructor() {
    this.repository = getRepository(ProfessorTurma);
  }

  async criar({
    professorId,
    turmaId,
  }: CreateProfessorTurmaDTO): Promise<ProfessorTurma> {
    const ProfessorTurma = await this.repository.save({
      professorId,
      turmaId,
    });

    return ProfessorTurma;
  }

  async remover(ProfessorTurma: ProfessorTurma): Promise<void> {
    await this.repository.remove(ProfessorTurma);
  }

  async listar(
    query: QueryProfessorTurmas
  ): Promise<[ProfessorTurma[], number]> {
    const { professorId, nomeTurma, orderBy, orderDirection, page, per } =
      query;

    const [professorTurmas, total] = await this.repository.findAndCount({
      relations: ["professor", "turma"],
      where: {
        professorId,
        turma: { nome: ILike(`%${nomeTurma}%`) },
      },
      order: {
        [orderBy]: orderDirection,
      },
      skip: (page - 1) * per,
      take: per,
    });

    return [professorTurmas, total];
  }

  async buscar({
    professorId,
    turmaId,
  }: CreateProfessorTurmaDTO): Promise<ProfessorTurma> {
    const professorTurma = await this.repository.findOne({
      where: { professorId, turmaId },
    });

    return professorTurma;
  }
}
