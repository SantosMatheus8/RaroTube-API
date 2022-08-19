import { IListTurmaService } from "../../@types/services/ITurmaService";
import { Inject, Service } from "typedi";
import { ITurmaRepository } from "../../@types/repositories/ITurmaRepository";
import { Turma } from "../../models/turma";

@Service("ListTurmaService")
export class ListTurmaService implements IListTurmaService {
  constructor(
    @Inject("TurmaRepository") private turmaRepository: ITurmaRepository
  ) {}

  async execute(): Promise<Turma[]> {
    return await this.turmaRepository.listar();
  }
}
