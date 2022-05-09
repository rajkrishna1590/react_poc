import {combineReducers} from 'redux'

const initState = {
    value: 0,
    categoryData: [],
    cart:[]
}


function counterRedcer(state = initState, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, value: state.value + 1 }
        
        case 'decrement':
            return { ...state, value: state.value - 1 }
        
        default:
            return state
        
    }
}


function updateCategoryData(state = initState, action) {
    switch (action.type) {
        case 'SET_CATEGORY_DATA':
            return { ...state, categoryData: action.data }
        
        default:
            return state
    }
}

function updateCartData(state = initState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            console.log(state)
            // eslint-disable-next-line no-case-declarations
            let latestCart = state.cart;
            latestCart.push(action.data); // updated cart data
            return { ...state, cart: latestCart }
        
            case 'DELETE_PRODUCT_FROM_CART':
                console.log(state)
                // eslint-disable-next-line no-case-declarations
            let cartData = state.cart;
            // eslint-disable-next-line no-case-declarations
           const index = cartData.filter((item, index) => {
                if (item.product_id === action.data.product_id) {
                    return index;
                }
           })[0];
            delete cartData[index]
                return { ...state, cart: latestCart }
        
        default:
            return state
    }
}




const rootRedcer = combineReducers({
    counter: counterRedcer,
    categoryData: updateCategoryData,
    cartData :updateCartData
});

export default rootRedcer