import { React, Component } from 'react';
import { connect } from 'react-redux'
class CartInfor extends Component {
    cartTotalAmount = (cart) => {
        let totalAmount = 0;
        cart.forEach(item => {
            totalAmount += item.product.price * item.quantity;
        });
        return totalAmount;
    }
    render() {
        let { cart } = this.props;
        let elementCartInfor = '';
        if (cart.length === 0) {
            elementCartInfor = (
                <tr>
                    <th colSpan={6}>Empty product in your cart</th>
                </tr>
            )
        } else {
            elementCartInfor = (
                <tr>
                    <td colSpan={4}>
                        There are <b>{cart.length}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                        {this.cartTotalAmount(cart)} USD
                    </td>
                </tr>
            )
        }
        return (
            <tfoot id="my-cart-footer">
                {elementCartInfor}
            </tfoot>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(CartInfor);