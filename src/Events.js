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

const SearchableEventList = ({ events, getItems, children }) => (
    <Downshift itemToString={item => (item ? item.name : "")}>
        {({ getInputProps, isOpen, inputValue }) => (
            <div>
                <Input
                    {...getInputProps({
                        isOpen,
                        placeholder: `Search from ${events.length} tickets`
                    })}
                />

                <EventList events={getItems(inputValue)}>
                    {props => children(props)}
                </EventList>
            </div>
        )}
    </Downshift>
);

class Events extends React.Component {
    getItems = value => {
        const { events } = this.props;

        return value
            ? matchSorter(events, value, {
                  keys: ["name"]
              })
            : events;
    };

    render() {
        const { events, fetchEventsNextPage } = this.props;

        return (
            <div>
                <Button
                    label="Get more tickets"
                    onClick={() => fetchEventsNextPage()}
                />
                <SearchableEventList events={events} getItems={this.getItems}>
                    {({ event }) => (
                        <SelectableEvent event={event} key={event.id} />
                    )}
                </SearchableEventList>
                <Button
                    label="Get more tickets"
                    onClick={() => fetchEventsNextPage()}
                />
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchEventsNextPage,
    addItemToCart
};

function mapStateToProps(state) {
    return {
        events: state.events.events
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
