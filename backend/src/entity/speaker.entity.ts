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
  jobTitle: string;

  @Column("text", { nullable: false })
  company: string;

  @Column("text", { nullable: false })
  description: string;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.speakers, {
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
