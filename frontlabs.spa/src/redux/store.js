import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import companiesReducer from './companies-reducer'
import thunkMiddleware from 'redux-thunk'
import updateCompanyReducer from './update-company-reducer';

let reducers = combineReducers({
    companiesPage: companiesReducer,
    updateCompany: updateCompanyReducer,
});

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
);
const store = createStore(reducers, enhancer);

window.store = store;
export default store;