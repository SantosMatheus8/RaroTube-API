import { ICreateFavoritosService } from "../../@types/services/IFavoritoService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("CreateFavoritosController")
export class CreateFavoritosController {
  constructor(
    @Inject("CreateFavoritosService")
    private createFavoritosService: ICreateFavoritosService
  ) {}

  async handle(req: Request, res: Response) {
    const { videoId, alunoId } = req.body;

    const favorito = await this.createFavoritosService.execute({
      videoId,
      alunoId,
    });

    res.status(201).send(favorito);
  }
}
