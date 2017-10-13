import { combineReducers } from "redux";

const defaultState = { events: [], page: 0 };

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
