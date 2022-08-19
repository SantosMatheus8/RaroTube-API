import { IEnviaEmailRecuperacaoSenhaService } from "../../@types/services/IEnviaEmailRecuperacaoSenhaService";
import { Request, Response } from "express";
import { Inject, Service } from "typedi";

@Service("EnviaEmailRecuperacaoSenhaController")
export class EnviaEmailRecuperacaoSenhaController {
  constructor(
    @Inject("EnviaEmailRecuperacaoSenhaService")
    private enviaEmailRecuperacaoSenhaService: IEnviaEmailRecuperacaoSenhaService
  ) {}

  async handle(req: Request, res: Response) {
    const { emailAluno, emailOrigem, assunto } = req.body;

    this.enviaEmailRecuperacaoSenhaService.execute({
      emailAluno,
      emailOrigem,
      assunto,
    });

    res.send();
  }
}
