import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePatient1611095470477 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		queryRunner.createTable(
			new Table({
				name: 'patients',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}

}
