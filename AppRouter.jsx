import React, { Component } from "react";
import { Router, Route } from "react-router";

import List from "./src/components/List";
import Content from "./src/components/Ctnt";

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={List} />
                <Route path="/content/:id" component={Content} />
            </Router>
        );
    }
}
