import { Injectable, Inject } from "@nestjs/common";
import { Cat } from "./data.entity";
@Injectable()
export class CatsService {
  constructor(
    @Inject("CATS_REPOSITORY")
    private catsRepository: typeof Cat
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }
  async delete(id: string) {
    const user = await this.catsRepository.findByPk<Cat>(id);
    await user?.destroy();
  }
  async create(name: string, job: string, salary: number) {
    let obj = {
      name,
      job,
      salary,
    };
    await this.catsRepository.create(obj);
    return this.catsRepository.findAll<Cat>();
  }
  async update(id, name, job, salary) {
    const user = await this.catsRepository.findByPk<Cat>(id);
    await user?.update({name,job,salary})
    return this.catsRepository.findAll<Cat>();
  }
}
