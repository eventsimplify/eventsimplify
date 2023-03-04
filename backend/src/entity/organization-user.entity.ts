import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";

import { Organization, User, Role } from "./index";

@Entity({ name: "organization_users" })
export default class OrganizationUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.users, {
    onDelete: "CASCADE",
  })
  organization: Organization;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.organizations, {
    onDelete: "CASCADE",
  })
  user: User;

  @Column()
  roleId: number;

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "roleId",
  })
  role: Role;
}
