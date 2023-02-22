import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import IPermission from "../interfaces/IPermission";
import OrganizationUser from "./organization-user.entity";
import User from "./user.entity";

@Entity({ name: "roles" })
export default class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false, default: "created" })
  type: string;

  @Column("jsonb", { nullable: false, default: [] })
  permissions: IPermission[];

  @Column({ nullable: true })
  organizationId: number;

  @OneToMany(() => OrganizationUser, (user) => user.role)
  users: User[];

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
