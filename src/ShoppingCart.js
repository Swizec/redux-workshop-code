import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, withRouter } from "react-router";
import { Link } from "react-router-dom";

import { EventList } from "./Events";
import { EventStyle, Event } from "./Event";
import { Button, ManagedInput } from "./FormElements";
import { removeFromCart } from "./actions";
import CheckoutForm from "./CheckoutForm";

const RemovableEvent = ({ item }) => (
    <EventStyle>
        <Event event={item} />
    </EventStyle>
);

const Home = ({ items, match }) => (
    <div>
        <h1>Shopping cart with {items.length} tickets</h1>
        <EventList events={items}>
            {({ event }) => <RemovableEvent item={event} key={event.id} />}
        </EventList>
        {items.length > 0 ? (
            <Link to={`${match.url}/checkout`}>Checkout</Link>
        ) : null}
    </div>
);

const ShoppingCart = ({ items, match }) => (
    <div>
        <Route
            exact
            path={`${match.url}/`}
            component={({ match }) => <Home items={items} match={match} />}
        />
        <Route
            path={`${match.url}/checkout`}
            component={({ match }) => <CheckoutForm match={match} />}
        />
    </div>
);

export default withRouter(
    connect(state => ({
        items: state.shoppingCart.items
    }))(ShoppingCart)
);
