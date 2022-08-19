import { CreateFavoritoDTO, QueryFavoritosPorAluno } from "../dto/FavoritoDTO";
import { Favorito } from "../../models/favorito";

export interface IFavoritoRepository {
  criar({ videoId, alunoId }: CreateFavoritoDTO): Promise<Favorito>;
  listar(query: QueryFavoritosPorAluno): Promise<[Favorito[], number]>;
  buscar({ videoId, alunoId }: CreateFavoritoDTO): Promise<Favorito>;
  remover(favorito: Favorito): Promise<void>;
}
