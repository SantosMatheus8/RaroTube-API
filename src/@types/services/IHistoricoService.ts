import {
  HistoricoDTO,
  QueryHistoricoPorAluno,
  RetornoListaHistoricos,
} from "../../@types/dto/HistoricoDTO";
import { Historico } from "../../models/historico";

export interface IAddHistoricoService {
  execute({ videoId, alunoId }: HistoricoDTO): Promise<Historico>;
}
export interface IGetHistoricoByUserIdService {
  execute(
    queryHistoricoPorAluno: QueryHistoricoPorAluno
  ): Promise<RetornoListaHistoricos>;
}
