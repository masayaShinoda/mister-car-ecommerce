import React, { useState } from "react"
import getStripe from "../utils/stripejs"
import LazyLoad from 'react-lazy-load';
import "../styles/products.css"

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = new FormData(event.target).get("priceSelect")
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/store/`,
      cancelUrl: `${window.location.origin}/store/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div className="productCard">
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <legend>
            <LazyLoad>
              <img className="productImg" src={product.images} alt={product.name}/>
            </LazyLoad>
            <h2 className="productName">{product.name}</h2>
          </legend>
          <label>
            {/* <span className="priceSelectContainer"> */}
              {/* <select name="priceSelect"> */}
                {product.prices.map(price => (
                  <p className="productPrice" key={price.id} value={price.id}>
                    {formatPrice(price.unit_amount, price.currency)}
                  </p>
                ))}
              {/* </select> */}
            {/* </span> */}
          </label>
        </fieldset>
        <button
          disabled={loading}
          className={
            loading
            ? `disabledBuyBtn` : `buyBtn`
          }
        >
          Buy
        </button>
      </form>
    </div>
  )
}

export default ProductCard