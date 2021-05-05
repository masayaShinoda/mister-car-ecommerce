import React, { useState } from "react"
import { Link } from "gatsby"
import getStripe from "../utils/stripejs"
import LazyLoad from 'react-lazy-load';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

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

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   setLoading(true)

  //   const price = new FormData(event.target).get("priceSelect")
  //   const stripe = await getStripe()
  //   const { error } = await stripe.redirectToCheckout({
  //     mode: "payment",
  //     lineItems: [{ price, quantity: 1 }],
  //     successUrl: `${window.location.origin}/store/`,
  //     cancelUrl: `${window.location.origin}/store/`,
  //   })

  //   if (error) {
  //     console.warn("Error:", error)
  //     setLoading(false)
  //   }
  // }

  return (
    <div className="productCard">
      {/* <form onSubmit={handleSubmit}> */}
        <Link className="productLink" href={"/product/" + product.id} style={{ textDecoration: "none" }}>
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
        </Link>
        {/* <button
          disabled={loading}
          className={
            loading
            ? `disabledBuyBtn` : `buyBtn`
          }
        >
          Buy
        </button> */}
              <a
                style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, cursor: `pointer` }}
                className={"snipcart-add-item" + " buyBtn"}
                data-item-id={product.prices[0].id}
                data-item-price={((product.prices[0].unit_amount/100).toFixed(2))}
                data-item-image={product.images}
                data-item-name={product.name}
                data-item-url={`/store/${product.id}`}
              >
                <FontAwesomeIcon
                  size="xs"
                  icon={faShoppingCart}
                  style={{ marginRight: `.5rem`, maxWidth: `2.5rem` }}
                />
                Add to Cart
              </a>
      {/* </form> */}
    </div>
  )
}

export default ProductCard