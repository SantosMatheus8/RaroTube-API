import { SendMailRecuperacaoDTO } from "../../clients/EmailClient";

export interface IEnviaEmailRecuperacaoSenhaService {
  execute({
    emailAluno,
    emailOrigem,
    assunto,
  }: SendMailRecuperacaoDTO): Promise<void>;
}
