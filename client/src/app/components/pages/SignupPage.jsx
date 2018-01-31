import React from "react";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm.jsx";
import { signup } from "../../redux/auth/signup.js";

class SignupPage extends React.Component {
    submit(data) {
        console.log("signup");
        
        console.log(data);
        return this.props
            .signup(data)
            .then(() => this.props.history.push("/dashboard"));
    }

    render() {
        return (
            <div>
                <h1>Sign Up Page</h1>
                <SignupForm submit={this.submit.bind(this)} />
            </div>
        );
    }
}

export default connect(null, { signup })(SignupPage);
