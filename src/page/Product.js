import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ItemDetail from "../component/Frontend/ItemDetail";
import * as actions from "../actions/products";
import Loading from "../component/Loading";

class Home extends Component {
  componentDidMount() {
    this.props.actions.getProduct(this.props.match.params.id);
  }

  render() {
    const { product, loading } = this.props;
    return (
      <Fragment>
        <div className="columns body-columns">
          <div className="column is-half is-offset-one-quarter">
            {loading ? <Loading /> : <ItemDetail product={product} />}
          </div>
        </div>
      </Fragment>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
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
)(Home);
