import { ProductCategoriesTable } from "@/components/product-categories/ProductCategoriesTable"
import { ProductCategoryForm } from "@/components/product-categories/ProductCategoryForm"

function ProductCategoriesPage() {
  return (
    <div>
      <h1>
        Product Categories
      </h1>
      <section className="w-full">
        <ProductCategoriesTable data={[]} />
      </section>
      <div>
        <ProductCategoryForm />
      </div>
    </div>
  )
}
export default ProductCategoriesPage