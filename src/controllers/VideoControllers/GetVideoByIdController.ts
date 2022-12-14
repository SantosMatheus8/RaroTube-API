import { IGetVideoByIdService } from "../../@types/services/IVideoService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("GetVideoByIdController")
export class GetVideoByIdController {
  constructor(
    @Inject("GetVideoByIdService")
    private getVideoByIdService: IGetVideoByIdService
  ) {}

  async handle(req: Request, res: Response) {
    const video = await this.getVideoByIdService.execute(req.params.id);

    res.send(video);
  }
}
