import React from "react";
import { connect } from "react-redux";
import { List, Button, Message } from "semantic-ui-react";

import NoMovieBooked from "../messages/NoMovieBooked.jsx";

const MovieInfoPage = props => {
    return (
        <div>
            <h1>Movie Info Page</h1>
            <Message info>
                <Message.Header> {props.movieData.Title} </Message.Header>
                {Object.keys(props.movieData).map((record, i) => {
                    return (
                        <li key={i}>
                            <p>{record + ":" + props.movieData[record]}</p>
                        </li>
                    );
                })}
            </Message>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        movieData: state.movie
    };
}

export default connect(mapStateToProps)(MovieInfoPage);
