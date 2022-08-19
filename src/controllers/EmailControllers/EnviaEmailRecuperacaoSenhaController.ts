import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { EnviaEmailRecuperacaoSenhaService } from "../../services/EmailServices/EnviaEmailRecuperacaoSenhaService";

@Service("EnviaEmailRecuperacaoSenhaController")
export class EnviaEmailRecuperacaoSenhaController {
  constructor(
    @Inject("EnviaEmailRecuperacaoSenhaService")
    private enviaEmailRecuperacaoSenhaService: EnviaEmailRecuperacaoSenhaService
  ) {}

  async sendMail(req: Request, res: Response) {
    const { emailAluno, emailOrigem, assunto } = req.body;

    this.enviaEmailRecuperacaoSenhaService.execute({
      emailAluno,
      emailOrigem,
      assunto,
    });

    res.send();
  }
}
