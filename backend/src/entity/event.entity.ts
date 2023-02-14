import slugify from "slugify";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";

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

  //create slug before inserting into database
  @BeforeInsert()
  async beforeInsert() {
    const slug = slugify(this.name, {
      lower: true,
      strict: true,
    });

    const eventExists = await Event.findOneBy({
      slug,
    });

    if (eventExists) {
      const lastId = await Event.find({
        where: {},
        order: {
          id: "DESC",
        },
        take: 1,
      });

      this.slug = `${slug}-${lastId[0].id + 1}`;
    } else {
      this.slug = slug;
    }
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
