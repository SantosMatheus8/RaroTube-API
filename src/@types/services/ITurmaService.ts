import { Turma } from "../../models/turma";
import { TurmaDTO } from "../dto/TurmaDTO";

export interface ICreateTurmaService {
  execute({ nome, descricao, logoDoCurso }: TurmaDTO): Promise<Turma>;
}

export interface IListTurmaService {
  execute(): Promise<Turma[]>;
}

export interface IGetTurmaService {
  execute(id: string): Promise<Turma>;
}

export interface IUpdateTurmaService {
  execute(id, { nome, descricao, logoDoCurso }: TurmaDTO): Promise<Turma>;
}

export interface IDeleteTurmaService {
  execute(id: string): Promise<void>;
}
