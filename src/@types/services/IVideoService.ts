import { Video } from "../../models/video";
import {
  QueryVideos,
  QueryVideosPorTurma,
  QueryVideosPublicos,
  RetornoListaVideos,
  VideoDTO,
} from "../dto/VideoDTO";

export interface ICreateVideoService {
  execute({
    turmaId,
    nome,
    descricao,
    arquivoDoVideo,
    imagemBanner,
  }: VideoDTO): Promise<Video>;
}

export interface IDeleteVideoService {
  execute(id: string): Promise<void>;
}

export interface IGetAllVideosService {
  execute(queryVideos: QueryVideos): Promise<RetornoListaVideos>;
}

export interface IGetVideosPublicosService {
  execute(queryVideos: QueryVideosPublicos): Promise<RetornoListaVideos>;
}

export interface IGetVideosByTurmaIdService {
  execute(queryVideos: QueryVideosPorTurma): Promise<RetornoListaVideos>;
}

export interface IGetVideoByIdService {
  execute(id: string): Promise<Video>;
}

export interface IUpdateVideoService {
  execute(
    id: string,
    {
      turmaId,
      nome,
      arquivoDoVideo,
      descricao,
      imagemBanner,
    }: Partial<VideoDTO>
  ): Promise<Video>;
}
