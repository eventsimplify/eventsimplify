import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
  ManyToMany,
} from "typeorm";

import { Event, OrderDetails } from "./index";
import Order from "./orders.entity";

@Entity({ name: "tickets" })
export default class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false })
  type: string;

  @Column("numeric", { nullable: false, default: 0 })
  price: number;

  @Column("int", { nullable: false, default: 0 })
  quantity: number;

  @Column("int", { nullable: false, default: 0 })
  sold: number;

  @Column("date", { nullable: false })
  startDate: string;

  @Column("date", { nullable: false })
  endDate: string;

  @Column("int", { nullable: false, default: 1 })
  minPerOrder: number;

  @Column("int", { nullable: false, default: 10 })
  maxPerOrder: number;

  @Column("text", { nullable: false, default: "public" })
  visibility: "public" | "private";

  @Column("text", { nullable: true })
  description?: string;

  // relations with tickets
  @Column({ nullable: true })
  eventId: number;

  @ManyToOne(() => Event, (event) => event.tickets, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "eventId" })
  event: Event;

  @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.tickets)
  orders: OrderDetails[];

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
