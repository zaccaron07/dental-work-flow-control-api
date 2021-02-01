import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor'
import Patient from '@modules/patients/infra/typeorm/entities/Patient'
import User from '@modules/users/infra/typeorm/entities/User'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column('time with time zone')
  entry_date: Date

  @Column('time with time zone')
  due_date: Date

  @Column()
  price: number

  @Column()
  done: boolean

  @ManyToOne(() => Doctor)
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor

  @Column()
  doctor_id: string

  @ManyToOne(() => Patient)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient

  @Column()
  patient_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  user_id: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order
