import { Materia } from "../models/materia";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { IMateriaRepository } from "../@types/repositories/IMateriaRepository";
import { CreateMateriaDTO } from "../@types/dto/MateriaDTO";

@EntityRepository(Materia)
export class MateriaRepository implements IMateriaRepository {
  private repository: Repository<Materia>;

  constructor() {
    this.repository = getRepository(Materia);
  }

  async criar({ video, nome }: CreateMateriaDTO): Promise<Materia> {
    const materia = await this.repository.save({ video, nome });
    return materia;
  }

  async listarRecomendados(videoId: string): Promise<Materia[]> {
    const materias = await this.repository.find({
      select: ["nome"],
      where: { video: videoId },
    });
    const materiasDoVideo = materias.map((materia) => materia.nome);
    const videosComMesmaMateria = await this.repository
      .createQueryBuilder("materia")
      .leftJoinAndSelect("materia.video", "video")
      .leftJoinAndSelect("video.turma", "turma")
      .where("materia.nome IN (:...materiasDoVideo)", { materiasDoVideo })
      .andWhere("materia.video.id != :videoId", { videoId })
      .getMany();
    return videosComMesmaMateria;
  }

  async buscar(id: string): Promise<Materia> {
    const materia = await this.repository.findOne({ where: { id } });
    return materia;
  }
  async remover(id: string): Promise<void> {
    const materia = await this.buscar(id);
    await this.repository.remove(materia);
  }

  async listar(): Promise<Materia[]> {
    const materias = await this.repository.find({ relations: ["video"] });
    return materias;
  }
}
