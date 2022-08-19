import { ICreateComentarioService } from "../../@types/services/IComentarioService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("CreateComentarioController")
export class CreateComentarioController {
  constructor(
    @Inject("CreateComentarioService")
    private createComentarioService: ICreateComentarioService
  ) {}

  async handle(req: Request, res: Response) {
    const { videoId, usuarioId, conteudo } = req.body;

    const comentario = await this.createComentarioService.execute({
      videoId,
      usuarioId,
      conteudo,
    });

    res.status(201).send(comentario);
  }
}
