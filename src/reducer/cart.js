import { BUY_ITEM, REMOVE_CART_ITEM, UPDATE_CART_ITEM } from "../constants/actionType";
import { LOCALSTORAGE_NAME } from "../constants/localStorage";


// chưa chọn mua hàng
let initialState = [];
// kiểm tra trong localStorage nếu đã mua hàng
const ShoppingCartLocal = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
initialState = (ShoppingCartLocal != null && ShoppingCartLocal.length>0)?ShoppingCartLocal:initialState;
//hàm lấy ra vị trí sản phẩm chọn mua đã có trong giỏi hàng
const getIndexByProduct = (listCart, product) => {
    for (let index = 0; index < listCart.length; index++) {
        if(listCart[index].product.productId===product.productId){
            return index;
        }
    }
    return -1;
}

const cart = (state=initialState, action) => {
    // lấy sản phẩm và số lượng mua từ action
    let {product, quantity} = action;
    let item = {product, quantity};
    let index = -1;
    switch(action.type) {
        case BUY_ITEM:
            // xử lý cho chức năng chọn mua hàng
            // nếu giỏ hàng rỗng
            if(state.length === 0){
                state.push(item);
            }else { // đã có sản phẩm trong giỏ hàng
                // kiểm tra, tăng số lượng sản phẩm trong giỏ hàng
                index = getIndexByProduct(state, product);
                if(index>=0){ // tăng số lượng sản phẩm trong giỏ hàng nếu có
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity);
                }else{ // sản phẩm chưa có trong giỏ hàng
                    state.push(item);
                }
            }
            // lưu lại giỏ hàng vào localStorage (LOCAL_STORAGE_NAME)
            localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state));
            return [...state];
        case UPDATE_CART_ITEM:
            //tìm kiếm sản phẩm trong giỏ hàng cần sửa
            // cập nhật lại số lượng tương ứng
            index = getIndexByProduct(state, product);
            if(index>=0){
                state[index].quantity=parseInt(quantity);
            }
            // lưu lại giỏ hàng vào localStorage (LOCAL_STORAGE_NAME)
            localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state));
            return [...state];
        case REMOVE_CART_ITEM:
            index = getIndexByProduct(state, product);
            if(index>=0){ // thực hiện xóa sản phẩm tại vị trí index trong cart
                state.splice(index,1)
            }
            // lưu lại giỏ hàng vào localStorage (LOCAL_STORAGE_NAME)
            localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default cart;