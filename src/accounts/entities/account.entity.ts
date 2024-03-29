import { Image } from 'src/image/entities/image.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Index,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  sex: string;
  @Column()
  password: string;
  @ManyToOne(() => Role, (role) => role.accounts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  role: any = 2;
}
