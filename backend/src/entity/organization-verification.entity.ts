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
  status: "not_started" | "pending" | "approved" | "rejected";

  @OneToOne(() => Organization, (organization) => organization.verification)
  @JoinColumn({
    name: "organizationId",
  })
  organization: Organization;

  @Column("jsonb", {
    nullable: false,
    default: {},
  })
  businessDetails: IBusinessDetails;

  @Column("jsonb", {
    nullable: false,
    default: {},
  })
  representativeDetails: IRepresentativeDetails;

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
