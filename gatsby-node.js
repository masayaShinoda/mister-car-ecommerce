// code for generating slug for each blog post
const path = require("path")

//create new page for every new post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const productTemplate = path.resolve("./src/templates/productPage.js")
  const res = await graphql(`
    query data {
      allStripePrice {
        nodes {
          id
          currency
          unit_amount
          unit_amount_decimal
          active
          product {
            name
            description
            images
            id
          }
        }
      }
    }
  `)

  //2. Get product data
  res.data.allStripePrice.nodes.forEach(node => {
    console.log(productTemplate.JSON);
    createPage({
      //3. Create new pages
      component: productTemplate,
      path: `/product/${node.product.id}`, //dynamic based off of slug each post has
      context: {
        slug: node.product.id,
        //passed down as context
        currentProductData: node,
      },
    })
  })
}
