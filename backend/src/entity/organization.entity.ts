import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  BeforeRemove,
  PrimaryColumn,
  OneToMany,
} from "typeorm";
import { Event } from "./event.entity";

@Entity({ name: "organizations" })
export class Organization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: "text" })
  name: string;

  @Column({ nullable: true, type: "text" })
  summary?: string;

  @Column({ nullable: true, type: "text" })
  description?: string;

  // default columns

  @Column({ type: "boolean", default: false })
  deleted: boolean;

  @Column({ nullable: true, type: "text" })
  addedBy?: number;

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

  @BeforeUpdate()
  async beforeUpdate(req) {
    this.updatedBy = req.user.id;
  }

  @BeforeRemove()
  async beforeRemove(req) {
    this.deletedAt = new Date();
    this.deletedBy = req.user.id;
  }
}
