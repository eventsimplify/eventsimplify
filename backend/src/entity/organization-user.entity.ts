import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";

import { Organization, User } from "./index";

@Entity({ name: "organization_users" })
export class OrganizationUser extends BaseEntity {
  @PrimaryColumn()
  organizationId: number;

  @OneToOne(() => Organization, (organization) => organization.id)
  @JoinColumn({ name: "organizationId" })
  organization: Organization;

  @PrimaryColumn()
  userId: number;

  @OneToOne(() => User, (user) => user.organization)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column("text", { nullable: false })
  role: string;
}
