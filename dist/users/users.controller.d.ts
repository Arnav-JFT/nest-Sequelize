import { UsersService } from "./users.service";
import { CatsService } from "./data.services";
export declare class UsersController {
    private readonly usersService;
    private readonly CatService;
    constructor(usersService: UsersService, CatService: CatsService);
    jwt(user: string): string;
    create(name: string, job: string, salary: number): Promise<import("./data.entity").Cat[]>;
    findAll(): Promise<import("./data.entity").Cat[]>;
    update(id: number, name: string, job: string, salary: number): Promise<import("./data.entity").Cat[]>;
    remove(id: string): Promise<void>;
}
