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

import { IPermission } from "../interfaces";

import { OrganizationUser } from "./index";

@Entity({ name: "roles" })
export default class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false, default: "created" })
  type: string;

  @Column("jsonb", { nullable: true, default: {} })
  permissions: IPermission;

  @Column({ nullable: true })
  organization_id: number;

  @OneToMany(() => OrganizationUser, (user) => user.role)
  users: OrganizationUser[];

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
