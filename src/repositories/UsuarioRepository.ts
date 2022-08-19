import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import { Usuario } from "../models/usuario";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { UpdateUsuarioDTO, UsuarioDTO } from "../@types/dto/UsuarioDTO";

@EntityRepository(Usuario)
export class UsuarioRepository implements IUsuarioRepository {
  private repository: Repository<Usuario>;

  constructor() {
    this.repository = getRepository(Usuario);
  }

  async cadastrar({
    email,
    nome,
    fotoPerfil,
    senha,
  }: UsuarioDTO): Promise<Usuario> {
    return this.repository.save({
      email,
      nome,
      fotoPerfil,
      senha,
    });
  }

  async buscar(email: string): Promise<Usuario> {
    return await this.repository.findOne({
      where: { email },
      relations: ["professor", "admin", "aluno"],
    });
  }

  async buscarPorId(id: string): Promise<Usuario> {
    return await this.repository.findOne({ where: { id } });
  }

  async atualizaSenha(usuario: Usuario, senha: string): Promise<Usuario> {
    usuario.senha = senha;
    return this.repository.save(usuario);
  }

  async atualizar(
    id: string,
    { email, nome, fotoPerfil }: Partial<UpdateUsuarioDTO>
  ): Promise<Usuario> {
    const usuario = await this.repository.findOne(email);
    usuario.email = email ?? usuario.email;
    usuario.nome = nome ?? usuario.nome;
    usuario.fotoPerfil = fotoPerfil ?? usuario.fotoPerfil;
    return this.repository.save(usuario);
  }

  async remover(usuario: Usuario): Promise<void> {
    await this.repository.remove(usuario);
  }

  async listar(): Promise<Usuario[]> {
    return await this.repository.find();
  }
}
