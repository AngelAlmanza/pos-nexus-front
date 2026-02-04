"use client"

import { productCategoriesSchema, ProductCategorySchema } from "@/schemas/product-categories"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const FORM_ID = "product-category-form"

const defaultValues = {
  name: "",
  description: ""
}

export const ProductCategoryForm = () => {
  const form = useForm<ProductCategorySchema>({
    resolver: zodResolver(productCategoriesSchema),
    defaultValues
  })

  const onSubmit = (data: ProductCategorySchema) => {
    console.log(data)
  }

  const handleCancel = () => {
    form.reset(defaultValues)
  }

  return (
    <Dialog onOpenChange={(open) => {
      if (!open) {
        handleCancel()
      }
    }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Add Product Category</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Product Category</DialogTitle>
        </DialogHeader>

        <form id={FORM_ID} onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`${FORM_ID}-name`}>
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`${FORM_ID}-name`}
                    aria-invalid={fieldState.invalid}
                    placeholder="Category name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`${FORM_ID}-description`}>
                    Description
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={`${FORM_ID}-description`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <DialogFooter>
          <Field orientation="horizontal" className="justify-end">
            <DialogClose asChild>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" form={FORM_ID}>
              Save changes
            </Button>
          </Field>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}