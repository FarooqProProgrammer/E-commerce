export default function CartReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_CART': return { ...state, login: action.data }

   
        default: return state

    }

}
