import * as React from "react";
import PropTypes from "prop-types";

export class CartDetailsRows extends React.Component {
    handleChange = (product, event) => this.props.updateQuantity(product, event.target.value);

    render = () => {
        if (!this.props.cart || this.props.cart.length === 0) {
            return <tr>
                <td colSpan="5">Your cart is empty.</td>
            </tr>
        }
        
        return <React.Fragment>
            {this.props.cart.map(item => 
                <tr key={item.product.id}>
                    <td>
                        <input type="number" value={item.quantity} onChange={ev => this.handleChange(item.product, ev)} />
                    </td>
                    <td>{item.product.name}</td>
                    <td>${item.product.price.toFixed(2)}</td>
                    <td>${(item.quantity * item.product.price).toFixed(2)}</td>
                    <td>
                        <button className="btn btn-sm btn-danger" onClick={() => this.props.removeFromCart(item.product)}>
                            Remove
                        </button>
                    </td>
                </tr>
            )}
            <tr>
                <th colSpan="3" className="text-right">Total:</th>
                <th colSpan="2" className="text-right">${this.props.cartPrice.toFixed(2)}</th>
            </tr>
        </React.Fragment>
    };
};

CartDetailsRows.propTypes = {
    updateQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.array,
    cartPrice: PropTypes.number.isRequired
};
