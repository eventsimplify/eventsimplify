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

  @Column("boolean", { default: true })
  confirmed: boolean;

  @Column("boolean", { default: false })
  blocked: boolean;

  @Column("text", { nullable: false, default: "credentials" })
  provider: string;

  @Column("text", {
    nullable: true,
  })
  provider_id: string;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.provider_id = crypto.createHmac("sha256", this.email).digest("hex");
  }
}
