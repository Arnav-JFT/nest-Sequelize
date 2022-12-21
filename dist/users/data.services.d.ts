import { Cat } from "./data.entity";
export declare class CatsService {
    private catsRepository;
    constructor(catsRepository: typeof Cat);
    findAll(): Promise<Cat[]>;
    delete(id: string): Promise<void>;
    create(name: string, job: string, salary: number): Promise<Cat[]>;
    update(id: any, name: any, job: any, salary: any): Promise<Cat[]>;
}
