import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import {
  IBusinessDetails,
  IRepresentativeDetails,
} from "../interfaces/IOrganizationVerification";

import { Organization } from "./index";

@Entity({ name: "organization_verifications" })
export default class OrganizationVerification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", {
    nullable: false,
    default: "not_started",
  })
  status:
    | "not_started"
    | "verify_later"
    | "in_progress"
    | "verified"
    | "rejected";

  @Column()
  organization_id: number;

  @OneToOne(() => Organization, (organization) => organization.verification)
  @JoinColumn({
    name: "organization_id",
  })
  organization: Organization;

  @Column("int", {
    nullable: false,
    default: 0,
  })
  current_step: number;

  @Column("jsonb", {
    nullable: false,
    default: {},
  })
  business_details: IBusinessDetails;

  @Column("jsonb", {
    nullable: false,
    default: {},
  })
  representative_details: IRepresentativeDetails;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
