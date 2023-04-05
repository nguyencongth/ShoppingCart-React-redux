import * as types from '../constants/actionType';
// thong báo
export const act_Change_Notify = (content) => {
    return{
        type: types.CHANGE_NOTIFY,
        content: content
    }
}
// action khi mua hàng
export const act_BUY_ITEM = (product, quantity) => {
    return {
        type:types.BUY_ITEM,
        product:product,
        quantity:quantity
    }
}

// action khi cập nhật giỏi hàng
export const act_UPDATE_CART_ITEM = (product, quantity) => {
    return {
        type:types.UPDATE_CART_ITEM,
        product:product,
        quantity:quantity
    }
}
// xóa sản phẩm trong giỏ hàng
export const act_REMOVE_CART_ITEM = (product) => {
    return {
        type:types.REMOVE_CART_ITEM,
        product:product
    }
}