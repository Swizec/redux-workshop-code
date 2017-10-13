import { combineReducers } from "redux";
import { createSelector } from "reselect";

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
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    events,
    shoppingCart,
    checkout
});

export default rootReducer;
