import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
} from "typeorm";

import { Event, OrganizationUser } from "./index";

@Entity({ name: "organizations" })
export default class Organization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: true })
  summary?: string;

  @Column("text", { nullable: true })
  description?: string;

  @OneToMany(() => Event, (event) => event.organization)
  events: Event[];

  @OneToMany(
    () => OrganizationUser,
    (organizationUser) => organizationUser.organization
  )
  users: OrganizationUser[];

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
