import React from "react"
import { graphql, StaticQuery } from "gatsby"

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
        <div>
          {prices.edges.map(({ node: price }) => (
            <>
              <p key={price.id}>{price.product.name}</p>
              <span style={{display: `flex`}}>
                <p style={{textTransform: `uppercase`}}>
                  {price.currency}
                </p>
                <p>
                  {price.unit_amount/100}
                </p>
                </span>
              <img src={price.product.images} alt={price.product.name}/>

            </>
          ))}
        </div>
      )}
    />
  )
}