import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  user_name: string;

  @Column()
  phone: number;

  @Column()
  cpf: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
        this.id = uuid();
    }
  }
}

export { User };
