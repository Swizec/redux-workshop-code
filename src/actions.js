import Api from "./Api";

function fetchEvents() {
    return function(dispatch) {
        return Api.events().then(({ events }) => {
            // dispatch function to store events
        });
    };
}
