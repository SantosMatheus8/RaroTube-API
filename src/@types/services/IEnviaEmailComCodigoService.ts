import { SendMailDTO } from "../../clients/EmailClient";

export interface IEnviaEmailComCodigoService {
  execute({
    emailAluno,
    emailOrigem,
    assunto,
    codigoAcesso,
  }: SendMailDTO): Promise<void>;
}
