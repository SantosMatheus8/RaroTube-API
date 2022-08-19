import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IDeleteProfessorTurmaService } from "../../@types/services/IProfessorTurmaService";

@Service("DeleteProfessorTurmaController")
export class DeleteProfessorTurmaController {
  constructor(
    @Inject("DeleteProfessorTurmasService")
    private deleteProfessorTurmaService: IDeleteProfessorTurmaService
  ) {}

  async handle(req: Request, res: Response) {
    await this.deleteProfessorTurmaService.execute(req.body);

    res.status(204).send();
  }
}
