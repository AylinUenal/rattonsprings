import products from "../products.json"

export default function Product() {

  return (
    <>
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

      {
        products.map(product => {
          return (
            <div key={product.id}>
              <h2 className="text-center m-10 link-decoration hover:underline-offset-4">{product.name}</h2>
              <div className="flex items-center">
                <img className="h-96 mx-20" src={product.logo} alt={product.alt}/>
                <div>
                  <h3>About this product:</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
