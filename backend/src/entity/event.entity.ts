import slugify from "slugify";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from "typeorm";

import { Ticket, Organization, RegistrationForm } from "./index";

@Entity({ name: "events" })
export default class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", {
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column("text", { nullable: false })
  type: string;

  @Column("date", { nullable: false })
  startDate: string;

  @Column("date", { nullable: false })
  endDate: string;

  @Column("text", { nullable: true })
  summary?: string;

  @Column("text", { nullable: true })
  description?: string;

  @Column("text", { nullable: false, default: "saved" })
  status: "draft" | "published" | "saved" | "scheduled";

  @Column()
  organizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.events)
  @JoinColumn({ name: "organizationId" })
  organization: Organization;

  // relations with tickets
  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];

  @OneToMany(
    () => RegistrationForm,
    (registrationForm) => registrationForm.event
  )
  forms: RegistrationForm[];

  // default columns
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  //create slug before inserting into database
  @BeforeInsert()
  async beforeInsert() {
    const slug = slugify(this.name, {
      lower: true,
      strict: true,
    });

    this.slug = slug + "-" + new Date().getTime();
  }
}
