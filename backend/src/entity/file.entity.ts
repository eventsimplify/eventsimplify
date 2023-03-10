import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

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

  @Column("int", { nullable: true })
  relation_id: number;

  @Column("text", { nullable: true })
  relation_type: string;

  @Column("text", { nullable: true })
  field: string;

  // default columns
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
