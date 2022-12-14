import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IGetVideosSugeridosByVideoIdService } from "../../@types/services/IMateriaService";

@Service("GetVideosSugeridosByVideoIdController")
export class GetVideosSugeridosByVideoIdController {
  constructor(
    @Inject("GetVideosSugeridosByVideoIdService")
    private getVideosSugeridosByVideoIdController: IGetVideosSugeridosByVideoIdService
  ) {}

  async handle(req: Request, res: Response) {
    const video = await this.getVideosSugeridosByVideoIdController.execute(
      req.params.id
    );

    res.send(video);
  }
}
