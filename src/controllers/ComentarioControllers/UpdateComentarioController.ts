import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IUpdateComentarioService } from "../../@types/services/IComentarioService";

@Service("UpdateComentarioController")
export class UpdateComentarioController {
  constructor(
    @Inject("UpdateComentarioService")
    private updateComentarioService: IUpdateComentarioService
  ) {}

  async handle(req: Request, res: Response) {
    const comentarioId = req.params.id;
    const { conteudo } = req.body;
    const comentario = await this.updateComentarioService.execute(
      comentarioId,
      {
        conteudo,
      }
    );
    res.send(comentario);
  }
}
