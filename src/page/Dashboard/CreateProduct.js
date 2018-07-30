import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import includes from "lodash/includes";

import * as actions from "../../actions/products";
import Loading from "../../component/Loading";
import ProductForm from "../../component/Dashboard/ProductForm";

class CreateProduct extends Component {
  state = {
    product: {
      id: "",
      category_id: 1,
      title: "",
      brand: "",
      price: 0,
      description: "",
      quantity: 0,
      try_outfit: false,
      available_sizes: ""
    }
  };

  onChange = key => {
    return e => {
      let product = this.state.product;
      let val = e.target.value;
      if (includes(["price", "quantity"], key)){
        val = parseInt(val)
      }
      if (includes(["try_outfit"], key)){
        val = Boolean(val)
      }
      product[key] = val;
      this.setState(product);
    };
  };
  onSubmit = () => {
    const params = this.state.product;
    this.props.actions.storeProduct(params);
  };
  render() {
    return (
      <Fragment>
        <div className="container is-multiline">
          <div className="column">
            <ProductForm
              product={this.state.product}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

CreateProduct.propTypes = {
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ...state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProduct);
