export default function SingleReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_SINGLE_PRODUCT': return { ...state, login: action.data }

   
        default: return state

    }

}
