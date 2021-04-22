import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./ProductCard"
import "../styles/products.css"

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  images
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          products[product.id].prices.push(price)
        }
        return (
          <div className="productsContainer">
            {Object.keys(products).map(key => (
              <>
                <ProductCard key={products[key].id} product={products[key]} />
              </>
            ))}
          </div>
        )
      }}
    />
  )
}

export default Products


// import React from "react"
// import { graphql, StaticQuery } from "gatsby"

// import "../styles/products.css"

// export default function Products(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query ProductPrices {
//           prices: allStripePrice(
//             filter: { active: { eq: true } }
//             sort: { fields: [unit_amount] }
//           ) {
//             edges {
//               node {
//                 id
//                 active
//                 currency
//                 unit_amount
//                 product {
//                   id
//                   name
//                   description
//                   images
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={({ prices }) => (
//         <>
//           {prices.edges.map(({ node: price }) => (
//             <div className="productContainer">
//               <img className="productImg" src={price.product.images} alt={price.product.name}/>
//               <h2 className="productName" key={price.id}>{price.product.name}</h2>
//               <span className="productPrice">
//                 {price.currency == "usd" ? <p>$</p> : <p>?</p>}
//                 <p>{price.unit_amount/100}
//                 </p>
//               </span>

//             </div>
//           ))}
//         </>
//       )}
//     />
//   )
// }