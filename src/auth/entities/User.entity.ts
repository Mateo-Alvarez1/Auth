import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", {
    nullable: false,
    unique: true,
  })
  email: string;
  @Column("text", {
    nullable: false,
  })
  password: string;
  @Column("text", {
    nullable: false,
    select: false,
  })
  fullName: string;
  @Column("bool", {
    default: true,
  })
  isActive: boolean;

  @Column("text", {
    array: true,
    nullable: false,
    default: ["user"],
  })
  roles: string[];
}
