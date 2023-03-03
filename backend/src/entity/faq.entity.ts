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

@Entity({ name: "faqs" })
export default class Faq extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  question: string;

  @Column("text", { nullable: false })
  answer: string;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.speakers)
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
