import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions/products";
import Loading from "../../component/Loading";
import Item from "../../component/Dashboard/Item";
import Pagination from "../../component/Dashboard/Pagination";

class Products extends Component {
  state = {
    params: {
      page: 1
    }
  };

  componentDidMount() {
    const { params } = this.state;
    this.props.actions.getProducts(params, "first_load");
  }

  onClickPagination = (page) => {
    return () => {
      let params = this.state.params;
      params.page = page;
      this.setState(
        params
      );
      this.props.actions.getProducts(params, "first_load");
    };
  }

  render() {
    const { products, loading, pagination } = this.props;
    return (
      <Fragment>
        <div className="container is-multiline">
          <div className="column">
            {loading && <Loading />}
            {!loading && (
              <Fragment>
                <table className="table is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Brand</th>
                      <th>
                        <Link to={`/dashboard/products/create`}>
                          <span className="button is-primary is-small">
                            <i className="material-icons">note_add</i> Add New
                          </span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length > 0 &&
                      products.map((product, index) => {
                        return <Item product={product} key={index} />;
                      })}
                  </tbody>
                </table>
                <Pagination pagination={pagination} onClick={this.onClickPagination} />
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ...state.products
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
)(Products);
