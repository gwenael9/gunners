import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100})
    firstname: string;

    @Column({ length: 100})
    lastname: string;

    @Column()
    country: string;

    @Column()
    number: number;

    @Column()
    age: number;
}