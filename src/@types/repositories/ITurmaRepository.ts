import { TurmaDTO } from "../dto/TurmaDTO";
import { Turma } from "../../models/turma";

export interface ITurmaRepository {
  criar({ nome, descricao, logoDoCurso }: TurmaDTO): Promise<Turma>;
  atualizar(id, { nome, descricao, logoDoCurso }: TurmaDTO): Promise<Turma>;
  buscar(id: string): Promise<Turma>;
  remover(turma: Turma): Promise<void>;
  listar(): Promise<Turma[]>;
}
