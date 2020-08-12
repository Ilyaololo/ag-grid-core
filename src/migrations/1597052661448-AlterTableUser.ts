import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1597052661448 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // language=PostgreSQL
    await queryRunner.query(`
      CREATE TABLE "users"."user"
      (
        "sid"                     uuid                     NOT NULL DEFAULT uuid_generate_v4(),
        "employee_number"         integer                  NOT NULL,
        "name"                    character varying(255)   NOT NULL,
        "loc_name"                character varying(255)   NOT NULL,
        "group_name"              character varying(255)   NOT NULL,
        "employee_number_manager" integer                  NOT NULL,
        "name_manager"            character varying(255)   NOT NULL,
        "aht_1"                   integer                  NOT NULL,
        "aht_2"                   integer                  NOT NULL,
        "aht_3"                   integer                  NOT NULL,
        "aht_4"                   integer                  NOT NULL,
        "cc_1"                    integer                  NOT NULL,
        "cc_2"                    integer                  NOT NULL,
        "cc_3"                    integer                  NOT NULL,
        "cc_4"                    integer                  NOT NULL,
        "nn_1"                    integer                  NOT NULL,
        "nn_2"                    integer                  NOT NULL,
        "nn_3"                    integer                  NOT NULL,
        "nn_4"                    integer                  NOT NULL,
        "created_at"              TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        "updated_at"              TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920" UNIQUE ("name"),
        CONSTRAINT "UQ_e04ee818a141993da635f51af75" UNIQUE ("name", "group_name", "name_manager", "loc_name"),
        CONSTRAINT "PK_3976ec07d7a824855c5d8479c8c" PRIMARY KEY ("sid")
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // language=PostgreSQL
    await queryRunner.query(`
      DROP TABLE "users"."user";
    `);
  }

}
