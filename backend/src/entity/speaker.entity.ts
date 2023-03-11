import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Event } from "./index";

@Entity({ name: "speakers" })
export default class Speaker extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false })
  job_title: string;

  @Column("text", { nullable: false })
  company: string;

  @Column("text", { nullable: false })
  description: string;

  @Column()
  event_id: number;

  @ManyToOne(() => Event, (event) => event.speakers, {
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
