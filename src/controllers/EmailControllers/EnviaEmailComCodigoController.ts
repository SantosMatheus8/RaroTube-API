import { IEnviaEmailComCodigoService } from "../../@types/services/IEnviaEmailComCodigoService";
import { Request, Response } from "express";
import { Inject, Service } from "typedi";

@Service("EnviaEmailComCodigoController")
export class EnviaEmailComCodigoController {
  constructor(
    @Inject("EnviaEmailComCodigoService")
    private enviaEmailComCodigoService: IEnviaEmailComCodigoService
  ) {}

  async handle(req: Request, res: Response) {
    const { emailAluno, emailOrigem, assunto, codigoAcesso } = req.body;

    this.enviaEmailComCodigoService.execute({
      emailAluno,
      emailOrigem,
      assunto,
      codigoAcesso,
    });

    res.send();
  }
}
