import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { ILoginService } from "../../@types/services/IAutenticacaoService";

@Service("LoginController")
export class LoginController {
  constructor(@Inject("LoginService") private loginService: ILoginService) {}

  async handle(req: Request, res: Response) {
    const email = req.header("email");
    const senha = req.header("senha");

    const token = await this.loginService.execute(email, senha);

    res.status(200).send(token);
  }
}
