import { PickType } from '@nestjs/mapped-types';
import { Device } from 'src/entities/device.entity';

export class CreateDeviceDto extends PickType(Device, [
  'color',
  'partNumber',
  'category',
] as const) {}
