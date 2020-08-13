import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({
  schema: 'users',
  name: 'user',
})
@Unique(['name', 'group_name', 'name_manager', 'loc_name'])
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'sid',
  })
  public readonly sid!: string;

  @Column({
    type: 'int',
    name: 'employee_number',
  })
  public employee_number!: number;

  @Column({
    type: 'varchar',
    name: 'name',
    length: 255,
    unique: true,
  })
  public name!: string;

  @Column({
    type: 'varchar',
    name: 'loc_name',
    length: 255,
  })
  public loc_name!: string;

  @Column({
    type: 'varchar',
    name: 'group_name',
    length: 255,
  })
  public group_name!: string;

  @Column({
    type: 'int',
    name: 'employee_number_manager',
  })
  public employee_number_manager!: number;

  @Column({
    type: 'varchar',
    name: 'name_manager',
    length: 255,
  })
  public name_manager!: string;

  @Column({
    type: 'int',
    name: 'block',
    length: 255,
  })
  public block!: number;

  @Column({
    type: 'int',
    name: 'aht_1',
  })
  public aht_1!: number;

  @Column({
    type: 'int',
    name: 'aht_2',
  })
  public aht_2!: number;

  @Column({
    type: 'int',
    name: 'aht_3',
  })
  public aht_3!: number;

  @Column({
    type: 'int',
    name: 'aht_4',
  })
  public aht_4!: number;

  @Column({
    type: 'int',
    name: 'cc_1',
  })
  public cc_1!: number;

  @Column({
    type: 'int',
    name: 'cc_2',
  })
  public cc_2!: number;

  @Column({
    type: 'int',
    name: 'cc_3',
  })
  public cc_3!: number;

  @Column({
    type: 'int',
    name: 'cc_4',
  })
  public cc_4!: number;

  @Column({
    type: 'int',
    name: 'nn_1',
  })
  public nn_1!: number;

  @Column({
    type: 'int',
    name: 'nn_2',
  })
  public nn_2!: number;

  @Column({
    type: 'int',
    name: 'nn_3',
  })
  public nn_3!: number;

  @Column({
    type: 'int',
    name: 'nn_4',
  })
  public nn_4!: number;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    name: 'created_at',
  })
  public readonly created_at!: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
  })
  public readonly updated_at!: Date;
}
