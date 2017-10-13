import { combineReducers } from "redux";

function events(state = { events: [] }, action) {
    switch (action.type) {
        // what happens on EVENTS_RECEIVED
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    events
});

export default rootReducer;
