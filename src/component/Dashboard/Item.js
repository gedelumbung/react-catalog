import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.brand}</td>
      <td>
        <Link to={`/dashboard/products/edit/${product.id}`}>
          <span className="button is-dark is-small">
            <i className="material-icons">edit</i> Edit
          </span>
        </Link>{" "}
        <span className="button is-danger is-small" onClick={onDelete(product.id)}>
          <i className="material-icons">delete</i> Delete
        </span>
      </td>
    </tr>
  );
};

export default Item;
