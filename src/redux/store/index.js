import {applyMiddleware,createStore,compose} from "redux"
import Reducers from "../reducers"
import {Middleware} from "../middleware"
import {persistStore} from "redux-persist"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;





export const store =createStore(
    Reducers, composeEnhancers(applyMiddleware(...Middleware))
)

export const persistor= persistStore(store)




export default {store,persistor}