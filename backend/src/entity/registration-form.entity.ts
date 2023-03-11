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
  additional_questions: IQuestion[];

  @Column()
  event_id: number;

  @ManyToOne(() => Event, (event) => event.forms, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "event_id",
  })
  event: Event;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
