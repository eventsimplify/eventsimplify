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
} from "typeorm";

import Event from "./event.entity";

@Entity({ name: "files" })
export default class File extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false })
  key: string;

  @Column("int", { nullable: true, default: 0 })
  size: number;

  @Column("text", { nullable: true })
  mimetype: string;

  @Column("text", { nullable: true })
  url: string;

  @Column({ nullable: true, default: null })
  event_id: number;

  @ManyToOne(() => Event, (event) => event.banner, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "event_id" })
  event: Event;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
