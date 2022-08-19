import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IDeleteFavoritosService } from "../../@types/services/IFavoritoService";

@Service("DeleteFavoritoController")
export class DeleteFavoritoController {
  constructor(
    @Inject("DeleteFavoritosService")
    private deleteFavoritoService: IDeleteFavoritosService
  ) {}

  async remover(req: Request, res: Response) {
    await this.deleteFavoritoService.execute(req.body);

    res.status(204).send();
  }
}
