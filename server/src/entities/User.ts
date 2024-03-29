

import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./Post";
import { Updoot } from "./Updoot";

@ObjectType() 
@Entity()
export class User extends BaseEntity {
  @Field(() => Int) 
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({unique: true}) 
  username!: string;

  @Field(() => String)
  @Column({unique: true})
  email!: string;
  /* this password has no graphql endpoint field */
  @Column() 
  password!: string;

  @OneToMany(() => Post, post => post.creator)
  posts!: Post[];

  @OneToMany(() => Updoot, (updoot) => updoot.user)
  updoots!: Updoot[];

  @Field(() => String )
  @CreateDateColumn()
  created_at!: Date;

  @Field(() => String )
  @UpdateDateColumn()
  updated_at!: Date;

}