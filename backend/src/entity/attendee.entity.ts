import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";

import { OrderDetails } from ".";

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

  @ManyToOne(() => OrderDetails, (orderDetails) => orderDetails.id)
  order_details: OrderDetails;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
