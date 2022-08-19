import { Aluno } from "../../models/aluno";
import { CadastrarAlunoDTO } from "../dto/AlunoDTO";

export interface IAlunoRepository {
  cadastrar({ usuario, turma }: CadastrarAlunoDTO): Promise<Aluno>;
  buscar(usuarioId: string): Promise<Aluno>;
  buscarPorAlunoId(alunoId: string): Promise<Aluno>;
  remover(aluno: Aluno): Promise<void>;
}
