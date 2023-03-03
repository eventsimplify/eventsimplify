import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  ManyToMany,
} from "typeorm";

import { Order, Ticket } from "./index";

@Entity({ name: "order_details" })
export default class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (order) => order.orderDetails)
  order: Order;

  @ManyToMany(() => Ticket, (ticket) => ticket.id)
  tickets: Ticket[];

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
