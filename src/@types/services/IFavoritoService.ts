import { Favorito } from "../../models/favorito";
import {
  CreateFavoritoDTO,
  QueryFavoritosPorAluno,
  RetornoListaFavoritos,
} from "../dto/FavoritoDTO";

export interface IGetFavoritosByUserIdService {
  execute(
    queryFavoritosPorAluno: QueryFavoritosPorAluno
  ): Promise<RetornoListaFavoritos>;
}

export interface ICreateFavoritosService {
  execute({ videoId, alunoId }: CreateFavoritoDTO): Promise<Favorito>;
}

export interface IDeleteFavoritosService {
  execute({ videoId, alunoId }: CreateFavoritoDTO): Promise<void>;
}
