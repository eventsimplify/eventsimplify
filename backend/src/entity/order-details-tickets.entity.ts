import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from "typeorm";

import { Order, OrderDetails, Ticket } from "./index";

@Entity({ name: "order_details_tickets" })
export default class OrderDetailsTickets extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_detail_id: number;

  @ManyToOne(() => OrderDetails, (order_details) => order_details.tickets)
  @JoinColumn({
    name: "order_detail_id",
  })
  order_details: Order;

  @Column()
  ticket_id: number;

  @ManyToOne(() => Ticket, (ticket) => ticket.id)
  @JoinColumn({
    name: "ticket_id",
  })
  ticket: Ticket;

  @Column("int")
  quantity: number;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
