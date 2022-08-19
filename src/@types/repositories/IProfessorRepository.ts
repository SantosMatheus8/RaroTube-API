import { Professor } from "../../models/professor";
import { CreateProfessorDTO } from "../dto/ProfessorDTO";

export interface IProfessorRepository {
  cadastrar({ usuario }: CreateProfessorDTO): Promise<Professor>;
  buscarPorUsuarioId(usuarioId: string): Promise<Professor>;
  buscar(id: string): Promise<Professor>;
  remover(professor: Professor): Promise<void>;
}
