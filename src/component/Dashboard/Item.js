import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
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
        <Link to={`/dashboard/products/delete/${product.id}`}>
          <span className="button is-danger is-small">
            <i className="material-icons">delete</i> Delete
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Item;
