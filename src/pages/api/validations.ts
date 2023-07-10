import { z } from "zod"

const DATA_ERROR = "Data is required"
const DATA_INVALID = "Data is invalid"

export const authSchema = z.object({
  email: z.string().email("Invalid Email").nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password is too short")
    .nonempty("Password is required"),
})

export const userSchema = z.object({
  email: z.string().email("Invalid Email").nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password is too short")
    .nonempty("Password is required"),
  role: z.string().nonempty(DATA_ERROR),
  biodata_id: z.string().nonempty(DATA_ERROR),
  biodataType: z.string().nonempty(DATA_ERROR),
})

export const formSchema = z.object({
  name: z.string().trim().nonempty(DATA_ERROR),
  email: z.string().email("Invalid Email").nonempty("Email is required"),
  phone: z.string().trim().nonempty(DATA_ERROR),
  address: z.string().trim().nonempty(DATA_ERROR),
  numChildrens: z.string().trim().nonempty(DATA_ERROR),
  ageChildrens: z.string().trim().nonempty(DATA_ERROR),
  grade: z.string().trim().nonempty(DATA_ERROR),
  reason: z.string().trim().nonempty(DATA_ERROR),
})

export const paymentTypeSchema = z.object({
  type: z.string().trim().nonempty(DATA_ERROR),
  deadline: z.date(),
})

export const paymentSchema = z.object({
  user_id: z.string().trim().nonempty(DATA_ERROR),
  type_id: z.string().trim().nonempty(DATA_ERROR),
  amount: z.string().nonempty(DATA_ERROR),
})

export const proofSchema = z.object({
  payment_date: z.date(),
})

export const studentSchema = z.object({
  grade: z.string().trim().nonempty(DATA_ERROR),
  firstName: z.string().trim().nonempty(DATA_ERROR),
  lastName: z.string().trim().nonempty(DATA_ERROR),
  birthplace: z.string().trim().nonempty(DATA_ERROR),
  birthdate: z.date(),
  gender: z.string().trim().nonempty(DATA_ERROR),
  religion: z.string().trim().nonempty(DATA_ERROR),
  citizenship: z.string().trim().nonempty(DATA_ERROR),
  address: z.string().trim().nonempty(DATA_ERROR),
  nickname: z.string().trim().nonempty(DATA_ERROR),
  birthOrder: z.string().trim().nonempty(DATA_ERROR),
  numOfSiblings: z.string().trim().nonempty(DATA_ERROR),
  statusInFamily: z.string().trim().nonempty(DATA_ERROR),
  height: z.string().trim().nonempty(DATA_ERROR),
  weight: z.string().trim().nonempty(DATA_ERROR),
  bloodType: z.string().trim().nonempty(DATA_ERROR),
  diseaseHistory: z.string().trim().nonempty(DATA_ERROR),
  distanceToHome: z.string().trim().nonempty(DATA_ERROR),
  language: z.string().trim().nonempty(DATA_ERROR),
  mother_id: z.string().trim().nonempty(DATA_ERROR),
  father_id: z.string().trim().nonempty(DATA_ERROR),
})

export const parentSchema = z.object({
  status: z.string().trim().nonempty(DATA_ERROR),
  firstName: z.string().trim().nonempty(DATA_ERROR),
  lastName: z.string().trim().nonempty(DATA_ERROR),
  birthplace: z.string().trim().nonempty(DATA_ERROR),
  birthdate: z.date(),
  gender: z.string().trim().nonempty(DATA_ERROR),
  religion: z.string().trim().nonempty(DATA_ERROR),
  citizenship: z.string().trim().nonempty(DATA_ERROR),
  address: z.string().trim().nonempty(DATA_ERROR),
  phone: z.string().trim().nonempty(DATA_ERROR),
  occupation: z.string().trim().nonempty(DATA_ERROR),
  education: z.string().trim().nonempty(DATA_ERROR),
})

export const staffSchema = z.object({
  status: z.string().trim().nonempty(DATA_ERROR),
  firstName: z.string().trim().nonempty(DATA_ERROR),
  lastName: z.string().trim().nonempty(DATA_ERROR),
  birthplace: z.string().trim().nonempty(DATA_ERROR),
  birthdate: z.date(),
  gender: z.string().trim().nonempty(DATA_ERROR),
  religion: z.string().trim().nonempty(DATA_ERROR),
  citizenship: z.string().trim().nonempty(DATA_ERROR),
  address: z.string().trim().nonempty(DATA_ERROR),
  phone: z.string().trim().nonempty(DATA_ERROR),
  education: z.string().trim().nonempty(DATA_ERROR),
})

export const updateUserSchema = z.object({
  email: z.string().email("Invalid Email").nonempty("Email is required"),
  role: z.string().nonempty(DATA_ERROR),
  biodata_id: z.string().nonempty(DATA_ERROR),
  biodataType: z.string().nonempty(DATA_ERROR),
})

export const updateStudentSchema = z.object({
  grade: z.string().trim().nonempty(DATA_ERROR),
  firstName: z.string().trim().nonempty(DATA_ERROR),
  lastName: z.string().trim().nonempty(DATA_ERROR),
  birthplace: z.string().trim().nonempty(DATA_ERROR),
  birthdate: z.date(),
  // gender: z.string().nonempty(DATA_ERROR),
  religion: z.string().trim().nonempty(DATA_ERROR),
  citizenship: z.string().trim().nonempty(DATA_ERROR),
  address: z.string().trim().nonempty(DATA_ERROR),
  nickname: z.string().trim().nonempty(DATA_ERROR),
  // birthOrder: z.number().nonnegative(DATA_INVALID),
  // numOfSiblings: z.number().nonnegative(DATA_INVALID),
  statusInFamily: z.string().trim().nonempty(DATA_ERROR),
  // studentStatus: z.string().nonempty(DATA_ERROR),
  // height: z.number().nonnegative(DATA_INVALID),
  // weight: z.number().nonnegative(DATA_INVALID),
  bloodType: z.string().trim().nonempty(DATA_ERROR),
  diseaseHistory: z.string().trim().nonempty(DATA_ERROR),
  distanceToHome: z.string().trim().nonempty(DATA_ERROR),
  language: z.string().trim().nonempty(DATA_ERROR),
  mother_id: z.string().trim().nonempty(DATA_ERROR),
  father_id: z.string().trim().nonempty(DATA_ERROR),
})

export const updateParentSchema = z.object({
  status: z.string().trim().nonempty(DATA_ERROR),
  firstName: z.string().trim().nonempty(DATA_ERROR),
  lastName: z.string().trim().nonempty(DATA_ERROR),
  birthplace: z.string().trim().nonempty(DATA_ERROR),
  birthdate: z.date(),
  // gender: z.boolean(),
  religion: z.string().trim().nonempty(DATA_ERROR),
  citizenship: z.string().trim().nonempty(DATA_ERROR),
  address: z.string().trim().nonempty(DATA_ERROR),
  phone: z.string().trim().nonempty(DATA_ERROR),
  occupation: z.string().trim().nonempty(DATA_ERROR),
  education: z.string().trim().nonempty(DATA_ERROR),
})

export const updateStaffSchema = z.object({
  status: z.string().trim().nonempty(DATA_ERROR),
  firstName: z.string().trim().nonempty(DATA_ERROR),
  lastName: z.string().trim().nonempty(DATA_ERROR),
  birthplace: z.string().trim().nonempty(DATA_ERROR),
  birthdate: z.string().nonempty(DATA_ERROR),
  // gender: z.boolean(),
  religion: z.string().trim().nonempty(DATA_ERROR),
  citizenship: z.string().trim().nonempty(DATA_ERROR),
  address: z.string().trim().nonempty(DATA_ERROR),
  phone: z.string().trim().nonempty(DATA_ERROR),
  education: z.string().trim().nonempty(DATA_ERROR),
})
