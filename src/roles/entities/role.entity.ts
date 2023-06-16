import { Account } from 'src/accounts/entities/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  role_name: string;
  @OneToMany(() => Account, (account) => account.role, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  accounts: string[];
}
