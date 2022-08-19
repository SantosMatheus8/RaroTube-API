import { IGetTurmaService } from "../../@types/services/ITurmaService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("GetTurmaController")
export class GetTurmaController {
  constructor(
    @Inject("GetTurmaService")
    private getTurmaService: IGetTurmaService
  ) {}

  async handle(req: Request, res: Response) {
    const turma = await this.getTurmaService.execute(String(req.params.id));

    res.send(turma);
  }
}
