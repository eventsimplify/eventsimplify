import slugify from "slugify";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  PrimaryColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Organization } from "./organization.entity";
import { Ticket } from "./ticket.entity";

@Entity({ name: "events" })
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: "text" })
  name: string;

  @PrimaryColumn({
    type: "text",
    unique: true,
  })
  slug: string;

  @Column({ nullable: false, type: "text" })
  type: string;

  @Column({ nullable: false, type: "text", array: true, default: [] })
  tags: string[];

  @Column({ nullable: false, type: "date" })
  startDate: string;

  @Column({ nullable: false, type: "date" })
  endDate: string;

  @Column({ nullable: true, type: "text" })
  summary?: string;

  @Column({ nullable: true, type: "text" })
  description?: string;

  @Column({ nullable: false, type: "text", default: "saved" })
  status: "draft" | "published" | "saved" | "scheduled";

  @PrimaryColumn({ nullable: false, type: "int" })
  organizationId: number;
  @OneToOne(() => Organization, (organization) => organization.id)
  organization: Organization;

  @PrimaryColumn("int", { nullable: false, array: true, default: [] })
  ticketIds: number[];
  @OneToMany(() => Ticket, (ticket) => ticket.id, {
    cascade: true,
    onDelete: "CASCADE",
  })
  tickets: Ticket[];

  // default columns
  @Column({ nullable: true, type: "text" })
  createdBy?: number;

  @Column({ nullable: true, type: "text" })
  updatedBy?: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true, type: "text" })
  deletedAt?: Date;

  @Column({ nullable: true, type: "text" })
  deletedBy?: number;

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
