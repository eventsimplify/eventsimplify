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
  BeforeRemove,
  BeforeUpdate,
  DeleteDateColumn,
} from "typeorm";
import { Organization } from "./organization.entity";

@Entity({ name: "events" })
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: "text" })
  name: string;

  @Column({
    type: "text",
    default: new Date().getTime(),
    primary: true,
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

  @PrimaryColumn({ nullable: false })
  organizationId: number;
  @OneToOne(() => Organization, (organization) => organization.id)
  organization: Organization;

  // default columns

  @Column({ nullable: true, type: "text" })
  addedBy?: number;

  @Column({ nullable: true, type: "text" })
  updatedBy?: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
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

  @BeforeRemove()
  async beforeRemove({ req }) {
    this.deletedAt = new Date();

    //get user id from request
    this.deletedBy = req.user.id;
  }

  public async delete({ id, userId }) {
    const event = await Event.findOne({
      where: { id: id },
    });

    if (!event) {
      throw new Error("Event not found");
    }

    event.deletedBy = userId;

    await event.save();

    await event.softRemove();
  }
}
