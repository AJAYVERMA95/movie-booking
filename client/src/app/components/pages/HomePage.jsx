import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { logout } from "../../redux/auth/logout";

const HomePage = props => {
    return (
        <div>
            <h1>MOVIE BOOKING HOME PAGE</h1>
            {props.isAuthenticated ? (
                <Button primary onClick={props.logout}>
                    Logout
                </Button>
            ) : (
                <div>
                    <Button secondary>
                        {" "}
                        <Link to="/login">LOGIN</Link>
                    </Button>{" "}
                    OR{" "}
                    <Button secondary>
                        <Link to="/signup"> SIGN UP</Link>
                    </Button>
                </div>
            )}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps, { logout })(HomePage);
