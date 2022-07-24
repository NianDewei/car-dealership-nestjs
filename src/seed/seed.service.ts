import { Injectable } from '@nestjs/common';
import { BRANDS_SEED, CARS_SEED } from './data';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  create() {
    this.carsService.AddDataInCars(CARS_SEED);
    this.brandsService.AddDataInBrands(BRANDS_SEED);
    return {
      message: 'All Ready',
    };
  }
}
