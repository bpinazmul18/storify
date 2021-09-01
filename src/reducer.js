import {CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE_ITEM} from "./actions";
import cartItems from "./cart-items";

const initialState = {
    cart: cartItems,
    total: 0,
    amount: 0,
}

function reducer (state = initialState, action) {

    if (action.type === CLEAR_CART) {
        return {...state, cart: []}
    }

    if (action.type === REMOVE_ITEM) {
        console.log('remove item', action.payload)
        const tempCart = state.cart.filter((item) => item.id !== action.payload)
        return {...state, cart: tempCart}
    }

    if (action.type === INCREASE) {
        console.log('increase amount')
        const tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                cartItem = {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem
        })
        return {...state, cart: tempCart}
    }

    if (action.type === DECREASE) {
        console.log(`decrease, id: ${action.payload.id}, amount: ${action.payload.amount}`)
        let tempCart  = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (cartItem.amount !== 1) {
                    cartItem = {...cartItem, amount: cartItem.amount - 1}
                } else {
                    console.log('your amount one')
                }
            }
            return cartItem
        })

        return {...state, cart: tempCart}
    }

    if (action.type === GET_TOTALS) {
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem
            const itemTotal = price * amount
            cartTotal.total +=itemTotal
            cartTotal.amount +=amount
            return cartTotal
        }, {
            total: 0,
            amount: 0,
        })
        total = parseFloat(total.toFixed(2))

        return {...state, total, amount }
    }

    return state
}

export default reducer