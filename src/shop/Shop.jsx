import * as React from "react";
import PropTypes from "prop-types";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";
import { CartSummary } from "./CartSummary";

export class Shop extends React.Component {
    handleAddToCart = (...args) => {
        this.props.addToCart(...args);
        this.props.history.push("/shop/cart");
    };

    render = () => {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                    <CartSummary {...this.props} />
                </div>
            </div>
            <div className="row">
            <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products" categories={this.props.categories} />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={this.props.products} addToCart={this.handleAddToCart} />
                </div>
            </div>
        </div>
    };
};

Shop.propTypes = {
    categories: PropTypes.array,
    products: PropTypes.array,
    addToCart: PropTypes.func.isRequired
};
