import {combineReducers} from 'redux';
import cart from './cart';
import ListProduct from './listProduct';
import notify from './notify';

const reducer = combineReducers({
    ListProduct:ListProduct,
    cart: cart,
    notify:notify,
});

export default reducer;