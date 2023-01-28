import { combineReducers } from "redux";
import SingleReducer from "../Reducers/SingleReducer";
import CartReducer from "../Reducers/CartReducer";



const rootReducer = combineReducers({
    SingleReducer,
    CartReducer
    
})

export default rootReducer