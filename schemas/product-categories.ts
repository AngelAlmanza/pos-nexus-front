import z from "zod";

export const productCategoriesSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character long"
  }).max(50, {
    message: "Name must be at most 50 characters long"
  }),
  description: z.string().min(1, {
    message: "Description must be at least 1 character long"
  }).max(255, {
    message: "Description must be at most 255 characters long"
  }).optional().or(z.literal("")),
})

export type ProductCategorySchema = z.infer<typeof productCategoriesSchema>;