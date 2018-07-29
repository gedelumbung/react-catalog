import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Item from "../component/Frontend/Item";
import * as actions from "../actions/products";
import Loading from "../component/Loading";

class Home extends Component {
  state = {
    params: {
      page: 1
    }
  };

  componentDidMount() {
    const { params } = this.state;
    this.props.actions.getProducts(params);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && !this.props.loading && !this.props.is_end_page) {
      let params = this.state.params;
      params.page = this.props.next_page;
      this.setState({
        params
      })
      this.props.actions.getProducts(this.state.params);
    }
  }

	render() {
    const { products, loading } = this.props;
		return (
			<Fragment>
        <div className="columns body-columns">
          <div className="column is-half is-offset-one-quarter">
            {products.map((product, index) => {
              return (
                <Item product={product} key={index}/>
              );
            })}
            {loading && <Loading/>}
          </div>
        </div>
			</Fragment>
		);
	}
}

Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
