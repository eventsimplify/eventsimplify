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

import { Organization } from "./index";
import Order from "./orders.entity";

@Entity({ name: "payment_details" })
export default class PaymentDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //relations with organization
  @Column()
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.events)
  @JoinColumn({ name: "organizationId" })
  organization: Organization;

  @Column("int", { nullable: false })
  total: number;

  @Column()
  orderId: number;

  @OneToOne(() => Order, (order) => order.id)
  @JoinColumn({ name: "orderId" })
  order: Order;

  @Column("text", { nullable: false, default: "online" })
  type: "online" | "manual";

  @Column("text", { nullable: false, default: "pending" })
  status: string;

  @Column("text", { nullable: false })
  provider: string;

  @Column("text", { nullable: true })
  paymentId: string;

  @Column("text", { nullable: true })
  notes: string;

  @Column("timestamptz", { nullable: false })
  paymentDate: string;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
