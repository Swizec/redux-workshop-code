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

const rootReducer = combineReducers({
    events
});

export default rootReducer;
