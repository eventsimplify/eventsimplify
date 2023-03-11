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
} from "typeorm";

import { Organization } from "./index";

@Entity({ name: "payment_details" })
export default class PaymentDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //relations with organization
  @Column()
  organization_id: number;

  @ManyToOne(() => Organization, (organization) => organization.id)
  @JoinColumn({ name: "organization_id" })
  organization: Organization;

  @Column("int", { nullable: false })
  total: number;

  @Column("text", { nullable: false, default: "online" })
  type: "online" | "manual";

  @Column("text", { nullable: false, default: "pending" })
  status: string;

  @Column("text", { nullable: false })
  provider: string;

  @Column("text", { nullable: true })
  payment_id: string;

  @Column("text", { nullable: true })
  notes: string;

  @Column("timestamptz", { nullable: true })
  payment_date: string;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
