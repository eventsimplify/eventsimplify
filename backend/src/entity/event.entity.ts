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

import { Ticket, Organization } from "./index";

@Entity({ name: "events" })
export class Event extends BaseEntity {
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

  // @AfterInsert()
  // private async createTicket() {
  //   //create general admission ticket

  //   console.log("this is the event", this);

  //   const event = await Event.findOne({
  //     where: {
  //       id: this.id,
  //     },
  //   });

  //   console.log("this is the event", event);

  //   // await Ticket.create({
  //   //   name: "General Admission",
  //   //   type: "free",
  //   //   startDate: this.startDate,
  //   //   endDate: this.endDate,
  //   //   quantity: 100,
  //   //   visibility: "public",
  //   //   minPerOrder: 1,
  //   //   maxPerOrder: 10,
  //   //   eventId: this.id,
  //   // }).save();

  //   // // update the tickets back to the event
  //   // const tickets = await Ticket.find({
  //   //   where: {
  //   //     eventId: this.id,
  //   //   },
  //   // });

  //   // this.tickets = tickets;

  //   // return this;
  // }

  // link subscribers

  // link controllers
}
