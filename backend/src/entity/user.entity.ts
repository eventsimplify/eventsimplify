import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { OrganizationUser } from "./organization-user.entity";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, enum: ["user", "admin", "organizer"] })
  type: "user" | "organizer" | "admin";

  @OneToOne(() => OrganizationUser, (organizationUser) => organizationUser.user)
  organization: OrganizationUser;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
