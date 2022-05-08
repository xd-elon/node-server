import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarImagens1651875914981 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "cars_image",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          {
            name: "car_id",
            type: "uuid",
          },
          {
            name: "image_name",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars_image");
  }
}
