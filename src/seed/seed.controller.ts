import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('api/v1/seeds')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  runSeed() {
    return this.seedService.create();
  }
}
