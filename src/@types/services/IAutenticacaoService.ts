import { RetornoAutenticacaoDTO } from "../dto/AutenticacaoDTO";
import { UsuarioDTO, RetornoCadastroUsuarioDTO } from "../dto/UsuarioDTO";
import { CreateAlunoDTO } from "../dto/AlunoDTO";

export interface ILoginService {
  execute(email: string, senha: string): Promise<RetornoAutenticacaoDTO>;
}

export interface ICadastrarService {
  execute(usuario: UsuarioDTO): Promise<RetornoCadastroUsuarioDTO>;
}

export interface ICadastrarAlunoService {
  execute(usuario: CreateAlunoDTO): Promise<RetornoCadastroUsuarioDTO>;
}
