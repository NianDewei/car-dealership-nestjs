import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('api/v1/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  index() {
    return this.carsService.findAll();
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  store(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'Deleted!',
      id,
    };
  }
}
