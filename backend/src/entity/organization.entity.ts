import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import {
  Event,
  OrganizationUser,
  OrganizationVerification,
  Settings,
} from "./index";

@Entity({ name: "organizations" })
export default class Organization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: true })
  summary: string;

  @Column("text", { nullable: true })
  description: string;

  @OneToMany(() => Event, (event) => event.organization)
  events: Event[];

  @OneToMany(
    () => OrganizationUser,
    (organizationUser) => organizationUser.organization
  )
  users: OrganizationUser[];

  @OneToMany(() => Settings, (settings) => settings.organization)
  settings: Settings[];

  @Column("text", { nullable: true })
  verification_id: string;

  @OneToOne(
    () => OrganizationVerification,
    (verification) => verification.organization
  )
  @JoinColumn({
    name: "verification_id",
  })
  verification: OrganizationVerification;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
