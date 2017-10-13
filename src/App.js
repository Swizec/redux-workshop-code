import React, { Component } from "react";
import { Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import Home from "./Home";
import Events from "./Events";
import ShoppingCart from "./ShoppingCart";

class AppContainer extends Component {
    render() {
        const { items, purchases } = this.props;

        return (
            <div className="App">
                <header>
                    <nav>
                        <Link to="/events">Event Listing</Link>
                        &nbsp;|&nbsp;
                        <Link to="/cart">Shopping Cart ({items})</Link>
                        &nbsp;|&nbsp; Total purchases: {purchases}
                    </nav>
                </header>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/events" component={Events} />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ shoppingCart, checkout }) {}

export default withRouter(connect(mapStateToProps)(AppContainer));
