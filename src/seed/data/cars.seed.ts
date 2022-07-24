import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'honda',
    model: 'HO455',
  },
  {
    id: uuid(),
    brand: 'toyota',
    model: 'TO455',
  },
  {
    id: uuid(),
    brand: 'volvo',
    model: 'VO2022',
  },
];
