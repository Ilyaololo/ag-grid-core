import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterSchemaUsers1597052658744 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // language=PostgreSQL
    await queryRunner.query(`
      CREATE SCHEMA "users";
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // language=PostgreSQL
    await queryRunner.query(`
      DROP SCHEMA "users";
    `);
  }

}
