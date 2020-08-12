import { Controller, Post, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from '../../entities/UserEntity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getUsers(
    @Query('skip') skip: number | null,
    @Query('take') take: number | null,
  ): Promise<{ total: number, items: UserEntity[] }> {
    return this.userService.getDataSource(take, skip);
  }

  @Post()
  public async createUsers(): Promise<{ success: boolean }> {
    await this.userService.createDataSource();

    return {
      success: true,
    }
  }
}
