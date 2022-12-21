import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private jwtService;
    constructor(jwtService: JwtService);
    jwt(user: any): string;
    create(name: string, job: string, salary: number): {
        id: number;
        name: string;
        job: string;
        salary: number;
    }[];
    findAll(): {
        id: number;
        name: string;
        job: string;
        salary: number;
    }[];
    update(id: number, name: string, job: string, salary: number): {
        id: number;
        name: string;
        job: string;
        salary: number;
    }[];
    remove(id: number): {
        id: number;
        name: string;
        job: string;
        salary: number;
    }[];
}
