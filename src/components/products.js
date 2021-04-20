import React from "react"
import { graphql, StaticQuery } from "gatsby"

import "../styles/products.css"

export default function Products(props) {
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
                  description
                  images
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => (
        <>
          {prices.edges.map(({ node: price }) => (
            <div className="productContainer">
              <img className="productImg" src={price.product.images} alt={price.product.name}/>
              <h2 className="productName" key={price.id}>{price.product.name}</h2>
              <span className="productPrice">
                {price.currency == "usd" ? <p>$</p> : <p>?</p>}
                <p>{price.unit_amount/100}
                </p>
              </span>

            </div>
          ))}
        </>
      )}
    />
  )
}