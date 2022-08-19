import {
  CreateProfessorTurmaDTO,
  QueryProfessorTurmas,
  RetornoListaProfessorTurmas,
} from "../../@types/dto/ProfessorTurmaDTO";
import { ProfessorTurma } from "../../models/professor_turma";

export interface ICreateProfessorTurmaService {
  execute({
    professorId,
    turmaId,
  }: CreateProfessorTurmaDTO): Promise<ProfessorTurma>;
}
export interface IDeleteProfessorTurmaService {
  execute({ professorId, turmaId }: CreateProfessorTurmaDTO): Promise<void>;
}
export interface IGetProfessorTurmaByProfessorIdService {
  execute(
    queryProfessorTurmas: QueryProfessorTurmas
  ): Promise<RetornoListaProfessorTurmas>;
}
