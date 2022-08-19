import { CreateVotoDTO } from "../../@types/dto/VotoDTO";
import { UsuarioVotaComentario } from "../../models/usuario_vota_comentario";

export interface IVotoRepository {
  criar({
    comentarioId,
    usuarioId,
    voto,
  }: CreateVotoDTO): Promise<UsuarioVotaComentario>;
  buscar({
    comentarioId,
    usuarioId,
    voto,
  }: CreateVotoDTO): Promise<UsuarioVotaComentario>;
  buscaPorId({ comentarioId, usuarioId }): Promise<UsuarioVotaComentario>;
  remover(voto: UsuarioVotaComentario): Promise<void>;
}
