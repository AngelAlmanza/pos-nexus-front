"use client"

import { productCategoriesSchema, ProductCategorySchema } from "@/schemas/product-categories"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export const ProductCategoryForm = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const form = useForm<ProductCategorySchema>({
    resolver: zodResolver(productCategoriesSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  })

  const handleSubmit = () => {
    submitButtonRef.current?.click()
  }

  const onSubmit = (data: ProductCategorySchema) => {
    console.log(data)
  }

  return (
    <Dialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent aria-describedby="Product Category Form">
            <DialogHeader>
              <DialogTitle>Create Product Category</DialogTitle>
            </DialogHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Category name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Category description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleSubmit}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
          <button ref={submitButtonRef} type="submit" className="hidden" />
        </form>
      </Form>
    </Dialog>
  )
}