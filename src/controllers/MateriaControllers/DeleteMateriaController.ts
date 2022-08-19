import { IDeleteMateriaService } from "../../@types/services/IMateriaService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";

@Service("DeleteMateriaController")
export class DeleteMateriaController {
  constructor(
    @Inject("DeleteMateriaService")
    private deleteMateriaService: IDeleteMateriaService
  ) {}

  async handle(req: Request, res: Response) {
    await this.deleteMateriaService.execute(req.params.id);

    res.status(204).send();
  }
}
