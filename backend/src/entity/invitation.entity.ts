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
  Generated,
} from "typeorm";
import { Organization } from "./index";

@Entity({ name: "invitations" })
export default class Invitations extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  email: string;

  @Column()
  @Generated("uuid")
  token: string;

  @Column("date", { nullable: false })
  expiresAt: Date;

  @Column("text", { nullable: false })
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.events)
  @JoinColumn({ name: "organizationId" })
  organization: Organization;

  @Column("text", { nullable: false })
  role: string;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
