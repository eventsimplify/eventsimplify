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
  start_date: string;

  @Column("date", { nullable: false })
  end_date: string;

  @Column("int", { nullable: false, default: 1 })
  min_per_order: number;

  @Column("int", { nullable: false, default: 10 })
  max_per_order: number;

  @Column("text", { nullable: false, default: "public" })
  visibility: "public" | "private";

  @Column("text", { nullable: true })
  description: string;

  // relations with tickets
  @Column({ nullable: true })
  event_id: number;

  @ManyToOne(() => Event, (event) => event.tickets, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "event_id" })
  event: Event;

  @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.tickets)
  orders: OrderDetails[];

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
