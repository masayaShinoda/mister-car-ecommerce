import * as React from "react"
import { Link } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Checkout from "../components/checkout.js"
import Products from "../components/products"

import "../styles/storeStyles.css"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_51HUq0ECBrZ9mAUEook2NFiIVzl70Hm1kTOdVRvd2onlKeX3jV4ASflaHg4kmYQduh7X9mBmuk7ZPqX9E93DKQCRR00C0Bb7Bon")
  }
  return stripePromise
}
const StorePage = () => (
  <Layout>
    <SEO title="Store" />
    <h1>Store</h1>
    
    <div className="storeContainer">
      <Products />

    </div>
    {/* <Checkout /> */}
  </Layout>
)

export default StorePage
