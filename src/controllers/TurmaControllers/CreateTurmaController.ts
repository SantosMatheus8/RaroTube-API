import { ICreateTurmaService } from "../../@types/services/ITurmaService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("CreateTurmaController")
export class CreateTurmaController {
  constructor(
    @Inject("CreateTurmaService")
    private createTurmaService: ICreateTurmaService
  ) {}

  async handle(req: Request, res: Response) {
    const { nome, descricao, logoDoCurso } = req.body;

    const turma = await this.createTurmaService.execute({
      nome,
      descricao,
      logoDoCurso,
    });

    res.status(201).send(turma);
  }
}
