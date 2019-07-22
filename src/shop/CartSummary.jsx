import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class CartSummary extends React.Component {
    getSummary = () => {
        if (this.props.cartItems > 0) {
            return <span>
                { this.props.cartItems } item(s),
                ${ this.props.cartPrice.toFixed(2) }
            </span>
        }
        else {
            return <span>Your cart: (empty)</span>
        }
    };

    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white ${this.props.cartItems === 0 ? "disabled" : ""}`;
    };

    render = () => {
        return <div className="float-right">
            <small>
                {this.getSummary()}
                <Link className={this.getLinkClasses()} to="/shop/cart">
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </small>
        </div>
    };
};

CartSummary.propTypes = {
    cartItems: PropTypes.number,
    cartPrice: PropTypes.number
};
