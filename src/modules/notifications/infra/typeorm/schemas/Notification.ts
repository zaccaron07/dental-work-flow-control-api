import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity('notifications')
class Notification {
  @ObjectIdColumn()
  id: ObjectID

  @Column('uuid')
  user_id: string

  @Column('uuid')
  order_id: string

  @Column()
  message: string

  @Column({ default: false })
  read: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Notification
