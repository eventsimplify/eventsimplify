import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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
}
