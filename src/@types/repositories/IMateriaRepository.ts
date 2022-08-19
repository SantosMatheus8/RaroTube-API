import { CreateMateriaDTO } from "../dto/MateriaDTO";
import { Materia } from "../../models/materia";

export interface IMateriaRepository {
  listarRecomendados(videoId: string): Promise<Materia[]>;
  criar({ video, nome }: CreateMateriaDTO): Promise<Materia>;
  buscar(id: string): Promise<Materia>;
  remover(id: string): Promise<void>;
  listar(): Promise<Materia[]>;
}
