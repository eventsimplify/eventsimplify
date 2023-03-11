import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity({ name: "venues" })
export default class Venue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  type: string;

  @Column("text", { nullable: true })
  name: string;

  @Column("text", { nullable: true })
  address1: string;

  @Column("text", { nullable: true })
  address2: string;

  @Column("text", { nullable: true })
  city: string;

  @Column("text", { nullable: true })
  state: string;

  @Column("text", { nullable: true })
  post_code: string;

  @Column("text", { nullable: true })
  country: string;

  @Column("text", { nullable: true })
  longitude: string;

  @Column("text", { nullable: true })
  latitude: string;

  @Column("jsonb", { nullable: true })
  address: string;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
