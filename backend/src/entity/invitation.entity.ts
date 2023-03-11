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
  expires_at: Date;

  @Column("text", { nullable: false })
  organization_id: number;

  @ManyToOne(() => Organization, (organization) => organization.events)
  @JoinColumn({ name: "organization_id" })
  organization: Organization;

  @Column()
  role_id: number;

  @OneToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: "role_id" })
  role: Role;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
