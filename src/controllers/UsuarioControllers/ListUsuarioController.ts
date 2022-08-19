import { IListUsuarioService } from "../../@types/services/IUsuarioService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("ListUsuarioController")
export class ListUsuarioController {
  constructor(
    @Inject("ListUsuarioService")
    private listUsuarioService: IListUsuarioService
  ) {}

  async handle(req: Request, res: Response) {
    const usuario = await this.listUsuarioService.execute();

    res.send(usuario);
  }
}
