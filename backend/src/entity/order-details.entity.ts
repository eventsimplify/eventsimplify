import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";

import { Attendee, OrderDetailsTickets } from "./index";

@Entity({ name: "order_details" })
export default class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => OrderDetailsTickets,
    (order_details_tickets) => order_details_tickets.order_details
  )
  tickets: OrderDetailsTickets[];

  @OneToMany(() => Attendee, (attendee) => attendee.order_details)
  attendees: Attendee[];

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
