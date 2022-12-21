import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CatsService } from "./data.services";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService , private readonly CatService: CatsService) {}
  @Post("token")
  jwt(@Body("user") user: string) {
    return this.usersService.jwt(user);
  }
  @Post()
  create(
    @Body("name") name: string,
    @Body("job") job: string,
    @Body("salary") salary: number
  ) {
    return this.CatService.create(name, job, salary);
  }

  @Get()
  findAll() {
    return this.CatService.findAll();
  }

  @Patch(":id")
  update(
    @Param("id") id: number,
    @Body("name") name: string,
    @Body("job") job: string,
    @Body("salary") salary: number
  ) {
    return this.CatService.update(id, name, job, salary);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.CatService.delete(id);
  }
}
