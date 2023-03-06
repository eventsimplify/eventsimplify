import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  BeforeInsert,
} from "typeorm";

import crypto from "crypto";

import { OrganizationUser } from "./index";

@Entity({ name: "users" })
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false, unique: true })
  email: string;

  @Column("text", { nullable: false })
  password: string;

  @OneToMany(
    () => OrganizationUser,
    (organizationUser) => organizationUser.user
  )
  organizations: OrganizationUser[];

  @Column("boolean", { default: true })
  active: boolean;

  @Column("boolean", { default: false })
  blocked: boolean;

  @Column("text", { nullable: false, default: "email" })
  provider: string;

  @Column("text", {
    nullable: true,
  })
  providerId: string;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.providerId = crypto.createHmac("sha256", this.email).digest("hex");
  }
}
