import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  ManyToMany,
  OneToMany,
} from "typeorm";

import { Attendee, Order, Ticket } from "./index";

@Entity({ name: "order_details" })
export default class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (order) => order.order_details)
  order: Order;

  @ManyToMany(() => Ticket, (ticket) => ticket.id)
  tickets: Ticket[];

  @OneToMany(() => Attendee, (attendee) => attendee.order_details)
  attendees: Attendee[];

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
