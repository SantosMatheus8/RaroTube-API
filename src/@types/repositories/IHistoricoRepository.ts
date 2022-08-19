import {
  HistoricoDTO,
  QueryHistoricoPorAluno,
} from "../../@types/dto/HistoricoDTO";
import { Historico } from "models/historico";

export interface IHistoricoRepository {
  adicionar({ videoId, alunoId }: HistoricoDTO): Promise<Historico>;
  buscaHistorico({ videoId, alunoId }: HistoricoDTO): Promise<Historico>;
  atualizaHistorico(historico: Historico): Promise<Historico>;
  listar(query: QueryHistoricoPorAluno): Promise<[Historico[], number]>;
}
