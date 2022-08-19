import { IUpdateTurmaService } from "../../@types/services/ITurmaService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("UpdateTurmaController")
export class UpdateTurmaController {
  constructor(
    @Inject("UpdateTurmaService")
    private updateTurmaService: IUpdateTurmaService
  ) {}

  async handle(req: Request, res: Response) {
    const turmaId = req.params.id;
    const { nome, descricao, logoDoCurso } = req.body;

    const turma = await this.updateTurmaService.execute(turmaId, {
      nome,
      descricao,
      logoDoCurso,
    });

    res.send(turma);
  }
}
