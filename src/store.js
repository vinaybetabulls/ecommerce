import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./Reducers/";

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
    return store;
}