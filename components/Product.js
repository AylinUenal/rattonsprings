import products from "../products.json"

export default function Product() {

  return (
    <>
      {
        products.map(product => {

          let categories = product.categories.join(", ");

          return (
            <div key={product.id}>
              <h2 className="text-center m-10 link-decoration hover:underline-offset-4">{product.name}</h2>
              <div className="flex items-center">
                <img className="h-96 mx-20" src={product.logo} alt={product.alt}/>
                <div>
                  <h3>About this product:</h3>
                  <p>{product.description}</p>
                  <p className="text-secondary mt-5">Categories: {categories}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
