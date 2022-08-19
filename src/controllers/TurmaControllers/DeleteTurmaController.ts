import { IDeleteTurmaService } from "../../@types/services/ITurmaService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("DeleteTurmaController")
export class DeleteTurmaController {
  constructor(
    @Inject("DeleteTurmaService")
    private deleteTurmaService: IDeleteTurmaService
  ) {}

  async handle(req: Request, res: Response) {
    await this.deleteTurmaService.execute(String(req.params.id));

    res.status(204).send();
  }
}
