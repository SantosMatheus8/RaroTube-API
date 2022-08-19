import { UsuarioVotaComentario } from "../../models/usuario_vota_comentario";
import { CreateVotoDTO, DeleteVotoDTO } from "../../@types/dto/VotoDTO";

export interface ICreateVotoService {
  execute({
    comentarioId,
    usuarioId,
    voto,
  }: CreateVotoDTO): Promise<UsuarioVotaComentario>;
}

export interface IDeleteVotoService {
  execute({ comentarioId, usuarioId }: DeleteVotoDTO): Promise<void>;
}
