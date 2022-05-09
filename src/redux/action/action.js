export const actionIncrement = (data) => {
    return {
        type: 'increment',
        data
    }
}

export const actionDecrement = (data) => {
    return {
        type: 'decrement',
        data
    }
}


export const setCategoryData = (data) => {
    return {
        type: 'SET_CATEGORY_DATA',
        data
    }
}


export const addProductToCarT = (data) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        data
    }
}

export const deleteProductFromCarT = (data) => {
    return {
        type: 'DELETE_PRODUCT_FROM_CART',
        data
    }
}

