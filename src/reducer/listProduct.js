import { LIST_PRODUCT } from "../constants/actionType";
const initialState = [
    {
        productId: "P001",
        productName: "aplusautomation",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 12,
        quantity: 10,
        image: "aplusautomation.jpg"
    },
    {
        productId: "P002",
        productName: "aplus media",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 11,
        quantity: 0,
        image: "aplus-media.jpg"
    },
    {
        productId: "P003",
        productName: "robo fig combo",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 15,
        quantity: 5,
        image: "robo_fig_combo.jpg"
    },
    {
        productId: "P004",
        productName: "target leap frog",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 8,
        quantity: 8,
        image: "target-leap-frog.jpg"
    }
];

const ListProduct = (state = initialState, action) => {
    switch(action.actionType){
        case LIST_PRODUCT:
            return state;
        default:
            return state;
    }
}
export default ListProduct;