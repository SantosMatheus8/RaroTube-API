import { IDeleteVideoService } from "../../@types/services/IVideoService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("DeleteVideoController")
export class DeleteVideoController {
  constructor(
    @Inject("DeleteVideoService")
    private deleteVideoService: IDeleteVideoService
  ) {}

  async handle(req: Request, res: Response) {
    await this.deleteVideoService.execute(req.params.id);

    res.status(204).send();
  }
}
