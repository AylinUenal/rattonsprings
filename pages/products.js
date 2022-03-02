import Product from "../components/Product"

export default function products() {
  return (
    <div className="mx-40">
      <h1 className="text-center py-10">Our Products</h1>
      <span className="mr-2">Filter by categories: </span>

      <input
        type="checkbox"
        name="lifestyle"
      />
      <label className="mx-2" htmlFor="lifestyle">Lifestyle </label>

      <input
        type="checkbox"
        name="daily"
      />
      <label className="mx-2" htmlFor="fun">Daily </label>

      <input
        type="checkbox"
        name="sport"
      />
      <label className="mx-2" htmlFor="sport">Sport </label>

      <Product />
    </div>
      )
}