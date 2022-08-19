import { EntityRepository, getRepository, Repository } from "typeorm";
import { Professor } from "../models/professor";
import { IProfessorRepository } from "../@types/repositories/IProfessorRepository";
import { CreateProfessorDTO } from "../@types/dto/ProfessorDTO";

@EntityRepository(Professor)
export class ProfessorRepository implements IProfessorRepository {
  private repository: Repository<Professor>;

  constructor() {
    this.repository = getRepository(Professor);
  }

  async cadastrar({ usuario }: CreateProfessorDTO): Promise<Professor> {
    return this.repository.save({ usuario });
  }

  async buscarPorUsuarioId(usuarioId: string): Promise<Professor> {
    const professor = await this.repository.findOne({
      where: { usuario: usuarioId },
    });
    return professor;
  }

  async buscar(id: string): Promise<Professor> {
    const professor = await this.repository.findOne({ where: { id } });
    return professor;
  }

  async remover(professor: Professor): Promise<void> {
    await this.repository.remove(professor);
  }
}
