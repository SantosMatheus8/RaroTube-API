import { Usuario } from "../../models/usuario";
import {
  RetornoCadastroUsuarioDTO,
  UpdateUsuarioDTO,
  UsuarioDTO,
} from "../dto/UsuarioDTO";

export interface ICreateUsuarioService {
  execute({
    email,
    nome,
    fotoPerfil,
    senha,
  }: UsuarioDTO): Promise<RetornoCadastroUsuarioDTO>;
}

export interface IListUsuarioService {
  execute(): Promise<Usuario[]>;
}

export interface IUpdateSenhaUsuarioService {
  execute(usuarioId: string, senha: string): Promise<RetornoCadastroUsuarioDTO>;
}

export interface IGetUsuarioService {
  execute(id: string): Promise<RetornoCadastroUsuarioDTO>;
}

export interface IUpdateUsuarioService {
  execute(
    id,
    { email, nome, fotoPerfil }: Partial<UpdateUsuarioDTO>
  ): Promise<RetornoCadastroUsuarioDTO>;
}

export interface IDeleteUsuarioService {
  execute(usuarioId: string): Promise<void>;
}
