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

const renderField = ({
    Component,
    input,
    placeholder,
    meta: { touched, error }
}) => (
    <div>
        <Component {...input} placeholder={placeholder} />
        {touched && error && <Error>{error}</Error>}
    </div>
);

const CheckoutForm = reduxForm({
    form: "checkout"
})(({ handleSubmit, error, submitting }) => (
    <FormStyle onSubmit={handleSubmit}>
        <Row>
            <Flex1>
                <Field
                    name="firstName"
                    component={props =>
                        renderField({ Component: NarrowInput, ...props })}
                    placeholder="First Name"
                />
            </Flex1>
            <Flex1>
                <Field
                    name="lastName"
                    component={props =>
                        renderField({ Component: NarrowInput, ...props })}
                    placeholder="Last Name"
                />
            </Flex1>
        </Row>
        <Row>
            <Field
                name="email"
                component={props => renderField({ Component: Input, ...props })}
                placeholder="Email"
            />
        </Row>
        <Row>{error && <strong>{error}</strong>}</Row>
        <Row>
            <Button type="submit" label="Get Tickets" disabled={submitting} />
        </Row>
    </FormStyle>
));

class CheckoutContainer extends React.Component {
    onSubmit = values => this.context.store.dispatch(checkoutTickets(values));

    form = () => {
        const { items, person } = this.props;

        return (
            <div>
                <h1>Checkout {items.length} tickets</h1>

                <CheckoutForm onSubmit={this.onSubmit} initialValues={person} />
                <Link to="/cart">Back</Link>
            </div>
        );
    };

    purchased = () => {
        const { lastPurchase: { items } } = this.props;

        return (
            <Middle>
                <h1>You bought {items.length} tickets!</h1>

                {items.map(({ name }, i) => <Row key={i}>{name}</Row>)}

                <Link to="/events">Get more</Link>
            </Middle>
        );
    };

    render() {
        const { purchased } = this.props;

        return purchased ? this.purchased() : this.form();
    }
}
CheckoutContainer.contextTypes = {
    store: PropTypes.object
};

export default connect(state => ({
    person: state.checkout.person,
    items: state.shoppingCart.items.length,
    lastPurchase: getLastPurchase(state),
    purchased: state.checkout.purchased
}))(CheckoutContainer);
