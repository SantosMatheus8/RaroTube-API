import { EntityRepository, getRepository, Repository } from "typeorm";
import { Admin } from "../models/admin";
import { IAdminRepository } from "../@types/repositories/IAdminRepository";
import { CreateAdminDTO } from "../@types/dto/AdminDTO";

@EntityRepository(Admin)
export class AdminRepository implements IAdminRepository {
  private repository: Repository<Admin>;

  constructor() {
    this.repository = getRepository(Admin);
  }

  async criar({ usuario }: CreateAdminDTO): Promise<Admin> {
    const admin = await this.repository.save({ usuario });
    return admin;
  }

  async buscar(id: string): Promise<Admin> {
    const admin = await this.repository.findOne({ where: id });
    return admin;
  }

  async buscarPorUsuarioId(usuarioId: string): Promise<Admin> {
    const admin = await this.repository.findOne({
      where: { usuario: usuarioId },
    });
    return admin;
  }

  async remover(admin: Admin): Promise<void> {
    await this.repository.remove(admin);
  }
}
