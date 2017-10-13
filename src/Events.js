import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import matchSorter from "match-sorter";

import Downshift from "downshift";
import { fetchEventsNextPage } from "./actions";
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
        fetchEventsNextPage
    };
}

export default connect(null, mapDispatchToProps)(Events);
