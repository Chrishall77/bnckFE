  
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import initial from "./initial";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initial, 
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    return store.getState();
});

export default store;