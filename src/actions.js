import Api from "./Api";

function fetchEvents() {
    console.log("trying to fetch");
    return function(dispatch) {
        console.log("Fetching events");
        return Api.events().then(({ events }) => {
            // dispatch function to store events
            dispatch({
                type: "EVENTS_RECEIVED",
                events
            });
        });
    };
}

function fetchEventsNextPage() {
    return function(dispatch, getState) {
        const { page } = getState().events;

        return Api.events(page + 1).then(({ events }) => {
            // dispatch function to store events
            dispatch({
                type: "EVENTS_RECEIVED",
                events
            });
            dispatch({
                type: "EVENTS_INC_PAGE",
                page: page + 1
            });
        });
    };
}

function addItemToCart(item) {
    return {
        type: "CART_ADD_ITEM",
        item
    };
}

export { fetchEvents, fetchEventsNextPage, addItemToCart };
