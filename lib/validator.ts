import { z } from "zod"
export const eventformSchema = z.object({
   title: z.string().min(3, { message: "Title must be at least 3 characters." }),
   descriptiom: z.string().min(3, { message: "Description must be at least 3 characters." }).max(400, { message: "Description must be at most 400 characters." }),
   location: z.string().min(3, { message: "Location must be at least 3 characters." }).max(400, { message: "Location must be at most 400 characters." }),
   imageUrl: z.string(),
   startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})