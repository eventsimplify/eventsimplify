import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { Organization, Event } from "./index";

@Entity({ name: "settings" })
export default class Settings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  key: string;

  @Column("text", { nullable: false })
  value: string;

  @Column("text", { nullable: false })
  type: string;

  @Column("text", { nullable: true })
  description: string;

  @Column({ nullable: false })
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.settings, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "organizationId" })
  organization: Organization;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.settings, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "eventId" })
  event: Event;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
