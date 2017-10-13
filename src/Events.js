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

const Events = ({ fetchEventsNextPage }) => (
    <div>
        <Button label="Get more tickets" onClick={fetchEventsNextPage} />
    </div>
);

function mapDispatchToProps() {
    return {
        fetchEventsNextPage: fetchEvents
    };
}

function mapStateToProps(state) {
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
