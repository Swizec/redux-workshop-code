import { combineReducers } from "redux";

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
    return; ///
}

const rootReducer = combineReducers({
    events,
    shoppingCart
});

export default rootReducer;
