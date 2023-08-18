import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1692358941769 implements MigrationInterface {
    name = 'Init1692358941769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "price" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
