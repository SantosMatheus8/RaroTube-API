import { CreateVotoDTO } from "../@types/dto/VotoDTO";
import { IVotoRepository } from "../@types/repositories/IVotoRepository";
import { UsuarioVotaComentario } from "../models/usuario_vota_comentario";
import { EntityRepository, getRepository, Repository } from "typeorm";

@EntityRepository(UsuarioVotaComentario)
export class VotoRepository implements IVotoRepository {
  private repository: Repository<UsuarioVotaComentario>;

  constructor() {
    this.repository = getRepository(UsuarioVotaComentario);
  }

  async criar({
    comentarioId,
    usuarioId,
    voto,
  }: CreateVotoDTO): Promise<UsuarioVotaComentario> {
    const novoVoto = await this.repository.save({
      comentarioId,
      usuarioId,
      voto,
    });
    return novoVoto;
  }

  async buscar({
    comentarioId,
    usuarioId,
    voto,
  }: CreateVotoDTO): Promise<UsuarioVotaComentario> {
    const existeVoto = await this.repository.findOne({
      where: { comentarioId, usuarioId, voto: voto },
    });

    return existeVoto;
  }

  async remover(voto: UsuarioVotaComentario): Promise<void> {
    await this.repository.remove(voto);
  }

  async buscaPorId({
    comentarioId,
    usuarioId,
  }): Promise<UsuarioVotaComentario> {
    return await this.repository.findOne({
      where: { comentarioId, usuarioId },
    });
  }
}
