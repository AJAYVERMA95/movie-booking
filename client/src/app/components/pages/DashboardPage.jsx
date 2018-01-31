import React from "react";
import { connect } from "react-redux";
import { List, Button } from "semantic-ui-react";

import NoMovieBooked from "../messages/NoMovieBooked.jsx";
import { logout } from "../../redux/auth/logout";

const DashboardPage = props => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div>
                {props.isAuthenticated && (
                    <Button primary onClick={props.logout}>
                        Logout
                    </Button>
                )}
            </div>
            <div>
                {props.user.bookings.length == 0 ? (
                    <NoMovieBooked />
                ) : (
                    <List>
                        {props.user.bookings.map(record => {
                            return (
                                <ul key={record["_id"]}>
                                    {Object.keys(record).map((v, i) => {
                                        return (
                                            <li key={i}>
                                                {v + ":" + record[v]}
                                            </li>
                                        );
                                    })}
                                </ul>
                            );
                        })}
                    </List>
                )}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user,
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps, { logout })(DashboardPage);
