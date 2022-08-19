import { IListTurmaService } from "../../@types/services/ITurmaService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("ListTurmaController")
export class ListTurmaController {
  constructor(
    @Inject("ListTurmaService")
    private listTurmaService: IListTurmaService
  ) {}

  async handle(req: Request, res: Response) {
    const turma = await this.listTurmaService.execute();

    res.send(turma);
  }
}
