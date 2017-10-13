import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { connect } from "react-redux";
import { checkoutTickets } from "./actions";
import { getLastPurchase } from "./reducer";
import PropTypes from "prop-types";

import { Input, NarrowInput, Button } from "./FormElements";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-bottom: 1em;
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 50px;
`;

const Middle = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 50px;
`;

const Error = styled.span`
    color: red;
`;

const Flex1 = styled.div`
    flex: 1;
`;

const CheckoutForm = () => <div>Hai I'm a form</div>;

export default CheckoutForm;
