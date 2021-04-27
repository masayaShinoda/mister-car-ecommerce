// code for generating slug for each blog post
const path = require("path")

//create new page for every new post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const productTemplate = path.resolve("./src/templates/productPage.js")
  const res = await graphql(`
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
    `)

  //2. Get product data
  res.data.edges.forEach(node => {
    createPage({
      //3. Create new pages
      component: productTemplate,
      path: `/product/${node.id}`, //dynamic based off of slug each post has
      context: {
        slug: node.id,
        //passed down as context
        currentProductData: node,
      },
    })
  })
}
