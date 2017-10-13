import { combineReducers } from "redux";

const defaultState = { events: [] };

function events(state = defaultState, action) {
    switch (action.type) {
        case "EVENTS_RECEIVED":
            return {
                ...state,
                events: action.events
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    events
});

export default rootReducer;
