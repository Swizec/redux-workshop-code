import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { reducer as formReducer } from "redux-form";

const defaultState = { events: [], page: 0 };

function events(state = defaultState, action) {
    switch (action.type) {
        // for EVENTS_INC_PAGE update page value
        case "EVENTS_INC_PAGE":
            return {
                ...state,
                page: action.page
            };
        case "EVENTS_RECEIVED":
            return {
                ...state,
                events: state.events.concat(action.events)
            };
        default:
            return state;
    }
}

function shoppingCart(state = { items: [] }, action) {
    // default is same
    // on add action, add to items list
    switch (action.type) {
        case "CART_ADD_ITEM":
            return {
                ...state,
                items: state.items.concat(action.item)
            };
        case "PURCHASED":
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
}

export const isInShoppingCart = createSelector(
    [(state, item) => item.id, (state, item) => state.shoppingCart],
    (itemId, shoppingCart) => {
        return shoppingCart.items.map(item => item.id).includes(itemId);
    }
);

function checkout(state = { person: {}, purchases: [] }, action) {
    switch (action.type) {
        case "PURCHASED":
            return {
                ...state,
                person: { ...state.person, ...action.person },
                purchases: state.purchases.concat({ items: action.purchase }),
                purchased: true
            };
        case "CART_ADD_ITEM":
            return { ...state, purchased: false };
        default:
            return state;
    }
}

export const getLastPurchase = createSelector(
    [state => state.checkout.purchases],
    purchases => purchases[purchases.length - 1]
);

const rootReducer = combineReducers({
    events,
    shoppingCart,
    checkout,
    form: formReducer
});

export default rootReducer;
