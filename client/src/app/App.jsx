import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./components/pages/HomePage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import DashboardPage from "./components/pages/DashboardPage.jsx";
import store from "./redux/store.js";
import userLoggedIn from "./redux/actions/userLoggedIn";

if (localStorage.userJWToken) {
    const user = {
        token: localStorage.userJWToken
    };
    store.dispatch(userLoggedIn(user));
}

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="ui container">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/dashboard" exact component={DashboardPage} />
                </div>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
