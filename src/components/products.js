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