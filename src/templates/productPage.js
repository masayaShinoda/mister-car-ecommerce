import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backBtn"
import "./ProductPage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const ProductPage = ({ pageContext }) => {
  const { currentProductData } = pageContext
  const formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
      style: "currency",
      currency: currency,
      currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
  }

  return (
    <Layout>
      <p>
        {currentProductData.id}
      </p>
      {/* <div className="productPageContainer">
        <div className="upperDiv">
          <BackButton destination="/" />
        </div>
        <div className="gallery">
          <img className="productImg" src={currentProductData.product.images[0]} alt={currentProductData.product.name}/>
        </div>
        <div className="productDetails">
          <h1>{currentProductData.product.name}</h1>
            <h2>
              {formatPrice(currentProductData.unit_amount, currentProductData.currency)}
            </h2>
          <span
            style={{
              display: `inline-flex`,
              alignItems: `center`,
              width: `100%`,
              justifyContent: `space-between`,
            }}
          >
              <a
                style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, cursor: `pointer` }}
                className={"snipcart-add-item" + " buyBtn"}
                data-item-id={currentProductData.id}
                data-item-price={((currentProductData.unit_amount/100).toFixed(2))}
                data-item-image={currentProductData.product.images}
                data-item-name={currentProductData.product.name}
                data-item-url={`/`}
              >
                <FontAwesomeIcon
                  size="xs"
                  icon={faShoppingCart}
                  style={{ marginRight: `.5rem`, maxWidth: `2.5rem` }}
                />
                Add to Cart
              </a>
          </span>
        </div>
      </div> */}
    </Layout>
  )
}

export default ProductPage
