import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from "typeorm";

import { Event, OrderDetails, Organization, PaymentDetails } from "./index";

@Entity({ name: "orders" })
export default class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //relations with organization
  @Column()
  organization_id: number;

  @ManyToOne(() => Organization, (organization) => organization.id)
  @JoinColumn({ name: "organization_id" })
  organization: Organization;

  //relations with event
  @Column()
  event_id: number;

  @ManyToOne(() => Event, (event) => event.id)
  @JoinColumn({ name: "event_id" })
  event: Event;

  //relations with order details
  @Column()
  order_detail_id: number;

  @OneToOne(() => OrderDetails, (orderDetails) => orderDetails.id)
  @JoinColumn({ name: "order_detail_id" })
  order_details: OrderDetails;

  //relations with payment details
  @Column()
  payment_detail_id: number;

  @OneToOne(() => PaymentDetails, (paymentDetails) => paymentDetails.id)
  @JoinColumn({ name: "payment_detail_id" })
  payment_details: PaymentDetails;

  //relation with total amount
  @Column("int", { nullable: false })
  total: number;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
