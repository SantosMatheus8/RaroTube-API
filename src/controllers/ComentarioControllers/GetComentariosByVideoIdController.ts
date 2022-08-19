import { IGetComentariosByVideoIdService } from "../../@types/services/IComentarioService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("GetComentariosByVideoIdController")
export class GetComentariosByVideoIdController {
  constructor(
    @Inject("GetComentariosByVideoIdService")
    private getComentariosByVideoIdService: IGetComentariosByVideoIdService
  ) {}

  async listar(req: Request, res: Response) {
    const comentarios = await this.getComentariosByVideoIdService.execute(
      req.params.id
    );

    res.send(comentarios);
  }
}
