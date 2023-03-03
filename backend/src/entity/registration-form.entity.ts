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

import { IQuestion } from "../interfaces";

@Entity({ name: "registration_forms" })
export default class RegistraionForm extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("jsonb", { nullable: false, default: [] })
  questions: IQuestion[];

  @Column("jsonb", { nullable: false, default: [] })
  additionalQuestions: IQuestion[];

  @Column()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.forms)
  @JoinColumn({
    name: "eventId",
  })
  event: Event;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
