export default interface ICreateOrderDTO {
  name: string
  entry_date: Date
  due_date: Date
  price: number
  done: boolean
  doctor_id: string
  patient_id: string
  user_id: string
}