import { ComentarioDTO } from "../../@types/dto/ComentarioDTO";
import { Comentario } from "../../models/comentario";

export interface ICreateComentarioService {
  execute({ videoId, usuarioId, conteudo }: ComentarioDTO): Promise<Comentario>;
}

export interface IDeleteComentarioService {
  execute(id: string): Promise<void>;
}

export interface IGetComentarioByIdService {
  execute(id: string): Promise<Comentario>;
}

export interface IGetComentariosByVideoIdService {
  execute(id: string): Promise<Comentario[]>;
}

export interface IUpdateComentarioService {
  execute(
    id: string,
    { videoId, usuarioId, conteudo }: Partial<ComentarioDTO>
  ): Promise<Comentario>;
}
