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
  OneToOne,
} from "typeorm";

import {
  Ticket,
  Organization,
  RegistrationForm,
  Faq,
  Settings,
  File,
  Speaker,
  Venue,
} from "./index";

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

  @Column("text", { nullable: true })
  type: string;

  @Column("timestamptz", { nullable: false })
  start_date: string;

  @Column("timestamptz", { nullable: false })
  end_date: string;

  @Column("text", { nullable: true })
  summary: string;

  @Column("text", { nullable: true })
  description?: string;

  @Column("text", { nullable: false, default: "draft" })
  status: "draft" | "published" | "saved" | "scheduled";

  @Column()
  organization_id: number;

  @ManyToOne(() => Organization, (organization) => organization.events, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "organization_id" })
  organization: Organization;

  // relations with tickets
  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];

  @OneToMany(
    () => RegistrationForm,
    (registrationForm) => registrationForm.event
  )
  forms: RegistrationForm[];

  @OneToMany(() => Speaker, (speaker) => speaker.event)
  speakers: Speaker[];

  @OneToMany(() => Faq, (faq) => faq.event)
  faqs: Faq[];

  @OneToMany(() => Settings, (settings) => settings.event)
  settings: Settings[];

  @OneToMany(() => File, (file) => file.relation_id, {
    cascade: true,
    onDelete: "CASCADE",
  })
  banner: File[];

  @Column()
  venue_id: number;

  @OneToOne(() => Venue, (venue) => venue.id)
  @JoinColumn({
    name: "venue_id",
  })
  venue: Venue;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

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
