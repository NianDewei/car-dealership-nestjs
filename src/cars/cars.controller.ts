import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// @UsePipes(ValidationPipe) // using at controller level
@Controller('api/v1/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  index() {
    return this.carsService.findAll();
  }

  @Get(':id')
  show(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe) // using at method level
  store(@Body() createCarDto: CreateCarDto) {
    const newCar = this.carsService.create(createCarDto);
    return newCar;
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    const updatedCar = this.carsService.update(id, updateCarDto);
    return updatedCar;
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
