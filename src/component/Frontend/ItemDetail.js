import React from "react";
import { currency } from "../../utils/format";
import get from "lodash/get";

const ItemDetail = ({ product }) => {
  const category = get(product, "category.title");
  const images = get(product, "images");
  return (
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
            <span className="tag is-large is-danger">
              <i className="material-icons">turned_in_not</i>{" "}
              {currency(product.price)}
            </span>
          </div>
          <div className="column is-6">
            <span className="tag is-light is-pulled-right is-small">
              {product.available_sizes}
            </span>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-6">
            <span className="tag is-small is-light">
              Brand : {product.brand}
            </span>
          </div>
          <div className="column is-6">
            <span className="tag is-light is-pulled-right is-small">
              Category : {category}
            </span>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-6">
            <span className="tag is-light is-small">
              <i className="material-icons">favorite_border</i>32 Peoples Love
              it
            </span>
          </div>
          {product.try_outfit && (
            <div className="column is-6">
              <span className="tag is-light is-small is-pulled-right">
                <i className="material-icons">mood</i> Try Outfit
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="content">
          <div className="columns is-mobile">
            <div className="column is-12">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="content">
          <div className="columns is-mobile">
            <div className="column is-6">
              <p>
                Available stock :{" "}
                <span className="tag">{product.quantity}</span>
              </p>
            </div>
            <div className="column is-6">
              <span className="button is-primary is-small is-pulled-right">
                <strong>Check Available Stock</strong>
              </span>
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
  );
};

export default ItemDetail;
