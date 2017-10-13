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

export { fetchEvents };
