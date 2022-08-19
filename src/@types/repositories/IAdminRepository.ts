import { CreateAdminDTO } from "../../@types/dto/AdminDTO";
import { Admin } from "../../models/admin";

export interface IAdminRepository {
  criar({ usuario }: CreateAdminDTO): Promise<Admin>;
  buscar(usuarioId: string): Promise<Admin>;
  buscarPorUsuarioId(usuarioId: string): Promise<Admin>;
  remover(admin: Admin): Promise<void>;
}
