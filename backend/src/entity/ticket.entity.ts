import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";

import { Event } from "./event.entity";

@Entity({ name: "tickets" })
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: "text" })
  name: string;

  @Column({ nullable: false, type: "text" })
  type: string;

  @Column({ nullable: false, type: "int", default: 0 })
  price: number;

  @Column({ nullable: false, type: "int", default: 0 })
  quantity: number;

  @Column({ nullable: false, type: "int", default: 0 })
  sold: number;

  @Column({ nullable: false, type: "date" })
  startDate: string;

  @Column({ nullable: false, type: "date" })
  endDate: string;

  @Column({ nullable: false, type: "int", default: 1 })
  minPerOrder: number;

  @Column({ nullable: false, type: "int", default: 10 })
  maxPerOrder: number;

  @Column({ nullable: false, type: "text", default: "public" })
  visibility: "public" | "private";

  @PrimaryColumn({ nullable: false })
  eventId: number;
  @OneToOne(() => Event, (event) => event.id)
  event: Event;

  @Column({ nullable: true, type: "text" })
  description?: string;

  // default columns
  @Column({ nullable: true, type: "text" })
  createdBy?: number;

  @Column({ nullable: true, type: "text" })
  updatedBy?: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true, type: "text" })
  deletedAt?: Date;

  @Column({ nullable: true, type: "text" })
  deletedBy?: number;
}
