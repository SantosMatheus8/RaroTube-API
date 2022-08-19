import { IUpdateSenhaUsuarioService } from "../../@types/services/IUsuarioService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("UpdateSenhaUsuarioController")
export class UpdateSenhaUsuarioController {
  constructor(
    @Inject("UpdateSenhaUsuarioService")
    private updateSenhaUsuarioService: IUpdateSenhaUsuarioService
  ) {}

  async handle(req: Request, res: Response) {
    const { codigo, senha } = req.body;

    const usuario = await this.updateSenhaUsuarioService.execute(codigo, senha);

    res.send(usuario);
  }
}
