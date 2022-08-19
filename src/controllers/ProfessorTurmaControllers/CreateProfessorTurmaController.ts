import { ICreateProfessorTurmaService } from "../../@types/services/IProfessorTurmaService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("CreateProfessorTurmaController")
export class CreateProfessorTurmaController {
  constructor(
    @Inject("CreateProfessorTurmaService")
    private createProfessorTurmaService: ICreateProfessorTurmaService
  ) {}

  async handle(req: Request, res: Response) {
    const { professorId, turmaId } = req.body;

    const favorito = await this.createProfessorTurmaService.execute({
      professorId,
      turmaId,
    });

    res.status(201).send(favorito);
  }
}
