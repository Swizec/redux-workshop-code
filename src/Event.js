import React from "react";
import { addToCart } from "./actions";
import styled from "styled-components";
import format from "date-fns/format";
import { connect } from "react-redux";

import { isInShoppingCart } from "./reducer";

export const EventStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
`;

const SelectableEventStyle = EventStyle.extend`
    cursor: pointer;
    &:hover {
        background: rgba(219, 112, 147, 0.3);
    }
`;

const SelectedEventStyle = EventStyle.extend`
    cursor: default;
    background: rgba(219, 112, 147, 0.3);
`;

const EventThumbStyle = styled.div`
    width: 250px;
`;

const EventMeta = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 20px;
`;

export const Event = ({ event }) => [
    <EventThumbStyle key="thumb">
        <img src={event.imageUrl} style={{ width: "100%" }} />
    </EventThumbStyle>,
    <EventMeta key="meta">
        <h2>{event.name}</h2>
        <p>{format(new Date(event.eventDateLocal), "ddd Do MMMM, hh:mma")}</p>
    </EventMeta>
];

const SelectableEvent = ({ event }) => (
    <SelectableEventStyle>
        <Event event={event} />
    </SelectableEventStyle>
);

export { SelectableEvent };
