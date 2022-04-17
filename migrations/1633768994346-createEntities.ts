import { MigrationInterface, QueryRunner } from 'typeorm';

export class createEntities1633768994346 implements MigrationInterface {
  name = 'createEntities1633768994346';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`device\` (\`id\` int NOT NULL AUTO_INCREMENT, \`color\` varchar(255) NOT NULL, \`partNumber\` int NOT NULL, \`categoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`device\` ADD CONSTRAINT \`FK_cc4b2d26310a880c63116ed2c68\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`device\` DROP FOREIGN KEY \`FK_cc4b2d26310a880c63116ed2c68\``,
    );
    await queryRunner.query(`DROP TABLE \`device\``);
    await queryRunner.query(`DROP TABLE \`category\``);
  }
}
