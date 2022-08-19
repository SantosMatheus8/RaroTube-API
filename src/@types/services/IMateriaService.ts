import { MateriaDTO } from "../dto/MateriaDTO";
import { Materia } from "../../models/materia";
import { Video } from "../../models/video";

export interface IGetVideosSugeridosByVideoIdService {
  execute(videoId: string): Promise<Video[]>;
}

export interface ICreateMateriaService {
  execute({ videoId, nome }: MateriaDTO): Promise<Materia>;
}

export interface IDeleteMateriaService {
  execute(id: string): Promise<void>;
}

export interface IGetAllMateriasService {
  execute(): Promise<Materia[]>;
}
