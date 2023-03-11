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
  organization_id: number;

  @ManyToOne(() => Organization, (organization) => organization.settings, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "organization_id" })
  organization: Organization;

  @Column()
  event_id: number;

  @ManyToOne(() => Event, (event) => event.settings, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "event_id" })
  event: Event;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
