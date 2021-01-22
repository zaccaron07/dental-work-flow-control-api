import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrder1611179235135 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
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
            name: 'entry_date',
            type: 'timestamp with time zone'
          },
          {
            name: 'due_date',
            type: 'timestamp with time zone'
          },
          {
            name: 'price',
            type: 'varchar'
          },
          {
            name: 'done',
            type: 'boolean'
          },
          {
            name: 'doctor_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'patient_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'DoctorOrder',
            referencedTableName: 'doctors',
            referencedColumnNames: ['id'],
            columnNames: ['doctor_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          },
          {
            name: 'PatientOrder',
            referencedTableName: 'patients',
            referencedColumnNames: ['id'],
            columnNames: ['patient_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders')
  }

}
