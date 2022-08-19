import { IAddHistoricoService } from "../../@types/services/IHistoricoService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("AddHistoricoController")
export class AddHistoricoController {
  constructor(
    @Inject("AddHistoricoService")
    private addHistoricoService: IAddHistoricoService
  ) {}

  async handle(req: Request, res: Response) {
    const { videoId, alunoId } = req.body;

    const historico = await this.addHistoricoService.execute({
      videoId,
      alunoId,
    });

    res.status(201).send(historico);
  }
}
