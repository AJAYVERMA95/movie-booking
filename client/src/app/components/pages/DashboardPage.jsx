import React from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";

import NoMovieBooked from "../messages/NoMovieBooked.jsx";

const DashboardPage = props => {
    return (
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
                                        <li key={i}>{v + ":" + record[v]}</li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </List>
            )}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(DashboardPage);
