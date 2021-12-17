import products from "../products.json"

export default function Product() {

  return (
    <>
    <span>Filter by categories: </span>

    <input
      type="checkbox"
      name="lifestyle"
    />
    <label htmlFor="lifestyle">Lifestyle </label>

    <input
      type="checkbox"
      name="daily"
    />
    <label htmlFor="fun">Daily </label>

    <input
      type="checkbox"
      name="sport"
    />
    <label htmlFor="sport">Sport </label>

      {
        products.map(product => {
          return (
            <div key={product.id}>
              <h2 className="text-center p-10">{product.name}</h2>
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
