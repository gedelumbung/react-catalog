import React from "react";
import { Link } from "react-router-dom";
import { currency } from "../../utils/format";

const Item = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={`${product.image}`} alt="Placeholder image" />
          </figure>
        </div>
        <div className="header">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{product.title}</p>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-6">
              <span className="button is-danger">
                <i className="material-icons">turned_in_not</i>{" "}
                {currency(product.price)}
              </span>
            </div>
            <div className="column is-6">
              <span className="button is-light is-pulled-right is-small">
                {product.available_sizes}
              </span>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            <div className="columns is-mobile">
              <div className="column is-6">
                <p>
                  <strong>32 Peoples Love it</strong>
                </p>
              </div>
              <div className="column is-6">
                {product.try_outfit && (
                  <span className="button is-light is-pulled-right is-small">
                    <i className="material-icons">mood</i> Try Outfit
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="columns is-mobile">
            <div className="column is-4">
              <button className="button">
                <i className="material-icons">favorite_border</i>
                Love It
              </button>
            </div>
            <div className="column is-4">
              <button className="button">
                <i className="material-icons">share</i>
                Share It
              </button>
            </div>
            <div className="column is-4">
              <button className="button">
                <i className="material-icons">shopping_cart</i>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
