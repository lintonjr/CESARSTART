import { IsAlpha, IsPositive, MaxLength } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Category)
  category: Category;

  @MaxLength(16)
  @IsAlpha()
  @Column()
  color: string;

  @IsPositive()
  @Column()
  partNumber: number;
}
