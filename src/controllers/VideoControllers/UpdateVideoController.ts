import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IUpdateVideoService } from "../../@types/services/IVideoService";

@Service("UpdateVideoController")
export class UpdateVideoController {
  constructor(
    @Inject("UpdateVideoService")
    private updateVideoService: IUpdateVideoService
  ) {}

  async handle(req: Request, res: Response) {
    const videoId = req.params.id;
    const { turmaId, nome, descricao, arquivoDoVideo, imagemBanner } = req.body;

    const video = await this.updateVideoService.execute(videoId, {
      turmaId,
      nome,
      descricao,
      arquivoDoVideo,
      imagemBanner,
    });

    res.send(video);
  }
}
