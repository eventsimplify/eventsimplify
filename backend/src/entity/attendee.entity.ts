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
  OneToOne,
} from "typeorm";

import { OrderDetails, Event } from ".";

@Entity({ name: "attendees" })
export default class Attendee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false })
  email: string;

  @Column("text", { nullable: true })
  phone: string;

  @Column("text", { nullable: true })
  age: string;

  @Column("text", { nullable: true })
  gender: string;

  @Column()
  order_detail_id: number;

  @ManyToOne(() => OrderDetails, (orderDetails) => orderDetails.attendees)
  @JoinColumn({
    name: "order_detail_id",
  })
  order_details: OrderDetails;

  @Column()
  event_id: number;

  @ManyToOne(() => Event, (event) => event.id)
  @JoinColumn({
    name: "event_id",
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
