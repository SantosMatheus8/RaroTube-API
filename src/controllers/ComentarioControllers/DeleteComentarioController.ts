import { IDeleteVideoService } from "../../@types/services/IVideoService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("DeleteComentarioController")
export class DeleteComentarioController {
  constructor(
    @Inject("DeleteComentarioService")
    private deleteComentarioService: IDeleteVideoService
  ) {}

  async handle(req: Request, res: Response) {
    await this.deleteComentarioService.execute(req.params.id);

    res.status(204).send();
  }
}
