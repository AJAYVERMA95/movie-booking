import React from "react";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm.jsx";
import { login } from "../../redux/auth/login.js";

class LoginPage extends React.Component {

    submit(data) {
        console.log(data);
        return this.props.login(data).then(() => this.props.history.push("/dashboard"));
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit.bind(this)} />
            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         login: data => {
//             dispatch(login(data));
//         }
//     };
// };

module.exports = connect(null, { login })(LoginPage);
