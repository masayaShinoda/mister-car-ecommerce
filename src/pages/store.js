import * as React from "react"
import { Link } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Checkout from "../components/checkout.js"
import Products from "../components/products"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51HUq0ECBrZ9mAUEofSz1rNu8U849cNg3HP2vnO3xwLDZhfUaLN4W2gtUUTLKO7pu70ycd89Q2st2UUVa3FNQUjv300xQh3qtrS")
  }
  return stripePromise
}
const StorePage = () => (
  <Layout>
    <SEO title="Store" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    {/* <Checkout /> */}
    <Products />
  </Layout>
)

export default StorePage
