import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePatient1611095470477 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
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
						name: 'user_id',
						type: 'uuid'
					},
					{
						name: 'age',
						type: 'integer'
					},
					{
						name: 'address',
						type: 'varchar'
					},
					{
						name: 'phone_number',
						type: 'varchar'
					},
					{
						name: 'email',
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
				],
				foreignKeys: [
					{
						name: 'UserPatient',
						columnNames: ['user_id'],
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('patients')
	}

}
