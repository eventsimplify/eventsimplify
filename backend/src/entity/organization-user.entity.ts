import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Organization, User, Role } from "./index";

@Entity({ name: "organization_users" })
export default class OrganizationUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  organization_id: number;

  @ManyToOne(() => Organization, (organization) => organization.users, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "organization_id" })
  organization: Organization;

  @Column()
  user_id: number;

  @ManyToOne(() => User, (user) => user.organizations, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  role_id: number;

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "role_id",
  })
  role: Role;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
