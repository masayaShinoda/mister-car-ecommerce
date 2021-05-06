import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backBtn"
import "./ProductPage.css"
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
      <div className="productPageContainer">
        <div className="upperDiv">
          <BackButton destination="/store" />
        </div>
          <div className="gallery">
            <img src={currentProductData.product.images[0]} alt={currentProductData.product.name}/>
          </div>
          <div className="productDetails">
            <h1>{currentProductData.product.name}</h1>
              <p>
                {currentProductData.product.description}
              </p>
              <h2 style={{marginTop: `1.1rem`}}>
                {formatPrice(currentProductData.unit_amount, currentProductData.currency)}
              </h2>
              <a
                style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, cursor: `pointer`, maxWidth: `max-content` }}
                className={"snipcart-add-item" + " buyBtn"}
                data-item-id={currentProductData.id}
                data-item-price={((currentProductData.unit_amount/100).toFixed(2))}
                data-item-image={currentProductData.product.images}
                data-item-name={currentProductData.product.name}
                data-item-url={`/product/${currentProductData.product.id}`}
              >
                <FontAwesomeIcon
                  size="xs"
                  icon={faShoppingCart}
                  style={{ marginRight: `.5rem`, maxWidth: `2.5rem` }}
                />
                Add to Cart
              </a>
          </div>
      </div>
    </Layout>
  )
}

export default ProductPage
