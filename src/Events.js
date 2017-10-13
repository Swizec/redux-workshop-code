import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import matchSorter from "match-sorter";

import Downshift from "downshift";
import { fetchEventsNextPage, fetchEvents } from "./actions";

import { Button, Input } from "./FormElements";

import { SelectableEvent } from "./Event";

const EventListStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 760px;
    margin: 0 auto;
`;

const EventList = ({ events, children }) => (
    <EventListStyled>
        <h3>{events.length} tickets</h3>
        {events.map(event => children({ event }))}
    </EventListStyled>
);

const Events = ({ events, fetchEventsNextPage }) => (
    <div>
        <Button
            label="Get more tickets"
            onClick={() => fetchEventsNextPage()}
        />
        <EventList events={events}>
            {({ event }) => <SelectableEvent event={event} key={event.id} />}
        </EventList>
    </div>
);

const mapDispatchToProps = {
    fetchEventsNextPage
};

function mapStateToProps(state) {
    return {
        events: state.events.events
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
