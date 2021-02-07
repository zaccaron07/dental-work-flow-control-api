import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateDatabase1610809878175 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('dentalworkflowcontrol')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('dentalworkflowcontrol')
  }
}
