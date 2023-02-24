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
  OneToOne,
} from "typeorm";
import { Organization, Role } from "./index";

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

  @Column()
  roleId: number;

  @OneToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: "roleId" })
  role: Role;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
