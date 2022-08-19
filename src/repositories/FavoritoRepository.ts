import { IFavoritoRepository } from "../@types/repositories/IFavoritoRepository";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { Favorito } from "../models/favorito";
import {
  CreateFavoritoDTO,
  QueryFavoritosPorAluno,
} from "../@types/dto/FavoritoDTO";

@EntityRepository(Favorito)
export class FavoritoRepository implements IFavoritoRepository {
  private repository: Repository<Favorito>;

  constructor() {
    this.repository = getRepository(Favorito);
  }

  async criar({ videoId, alunoId }: CreateFavoritoDTO): Promise<Favorito> {
    const favorito = await this.repository.save({
      videoId,
      alunoId,
    });
    return favorito;
  }

  async remover(favorito: Favorito): Promise<void> {
    await this.repository.remove(favorito);
  }

  async listar(query: QueryFavoritosPorAluno): Promise<[Favorito[], number]> {
    const { alunoId, orderBy, orderDirection, page, per } = query;

    const [favoritos, total] = await this.repository.findAndCount({
      where: { alunoId },
      order: {
        [orderBy]: orderDirection,
      },
      skip: (page - 1) * per,
      take: per,
    });

    return [favoritos, total];
  }

  async buscar({ videoId, alunoId }: CreateFavoritoDTO): Promise<Favorito> {
    const favorito = await this.repository.findOne({
      where: { videoId, alunoId },
    });
    return favorito;
  }
}
