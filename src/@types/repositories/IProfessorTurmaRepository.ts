import {
  CreateProfessorTurmaDTO,
  QueryProfessorTurmas,
} from "../dto/ProfessorTurmaDTO";
import { ProfessorTurma } from "../../models/professor_turma";

export interface IProfessorTurmaRepository {
  criar({
    turmaId,
    professorId,
  }: CreateProfessorTurmaDTO): Promise<ProfessorTurma>;
  listar(query: QueryProfessorTurmas): Promise<[ProfessorTurma[], number]>;
  buscar({
    turmaId,
    professorId,
  }: CreateProfessorTurmaDTO): Promise<ProfessorTurma>;
  remover(ProfessorTurma: ProfessorTurma): Promise<void>;
}
