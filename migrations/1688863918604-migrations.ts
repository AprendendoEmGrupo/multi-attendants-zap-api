import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1688863918604 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                created_at timestamp,
                updated_at timestamp,
                email VARCHAR(150) NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(17) NOT NULL,
                is_active BOOLEAN DEFAULT TRUE
            )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE IF EXISTS users
    `);
  }
}
