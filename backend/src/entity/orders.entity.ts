import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";

import { Event, OrderDetails, Organization, PaymentDetails } from "./index";

@Entity({ name: "orders" })
export default class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //relations with organization
  @Column()
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.events)
  @JoinColumn({ name: "organizationId" })
  organization: Organization;

  //relations with event
  @Column()
  eventId: number;

  @OneToOne(() => Event, (event) => event.id)
  @JoinColumn({ name: "eventId" })
  event: Event;

  //relations with order details
  @Column()
  order_details_id: number;

  @OneToOne(() => OrderDetails, (orderDetails) => orderDetails.order)
  @JoinColumn({ name: "order_detail_id" })
  order_details: OrderDetails;

  //relations with payment details
  @Column()
  payment_detail_id: number;

  @OneToOne(() => PaymentDetails, (paymentDetails) => paymentDetails.id)
  @JoinColumn({ name: "payment_detail_d" })
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
