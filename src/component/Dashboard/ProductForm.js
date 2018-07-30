import React, { Fragment } from "react";

const ProductForm = ({ product, onChange, onSubmit }) => {
  return (
    <Fragment>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={product.title}
            onChange={onChange("title")}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Brand</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Brand"
            value={product.brand}
            onChange={onChange("brand")}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={onChange("price")}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea className="textarea" rows="5" placeholder="Description" onChange={onChange("description")} defaultValue={product.description}></textarea>
        </div>
      </div>
      <div className="field">
        <label className="label">Quantity</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Quantity"
            value={product.quantity}
            onChange={onChange("quantity")}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Try Outfit</label>
        <div className="control">
          <div className="select">
            <select onChange={onChange("try_outfit")}>
              <option value="1">Yes, you can :)</option>
              <option value="0">No, I'm Sorry :(</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Available Sizes</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Available Sizes"
            value={product.available_sizes}
            onChange={onChange("available_sizes")}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductForm;
