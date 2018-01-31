import React from "react";
import { Search, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import api from "../api/api.js";
import movieInfo from "../redux/auth/movieInfo.js";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            value: "",
            results: [],
            redirect: false
        };
    }

    handleResultSelect = (e, { result }) => {
        console.log(result);
        this.props.movieInfo(result);
        this.setState({ value: result.Title, redirect: true });
    };

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });
        var query = { title: value };
        api.user
            .search(query)
            .then(resultList => {
                // console.log(resultList);

                this.setState({
                    isLoading: false,
                    results: resultList
                });
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    results: []
                });
            });
    };

    viewItem = ({ _id, Title, Description, Rating }) => {
        return (
            <div key={_id} className="content">
                {Rating && <div className="price">{Rating}</div>}
                {Title && <div className="title">{Title}</div>}
                {Description && (
                    <div className="description">{Description}</div>
                )}
            </div>
        );
    };

    render() {
        const { isLoading, value, results } = this.state;

        return (
            <div>
                {this.state.redirect && <Redirect push to="/movie/info" />}
                <Grid>
                    <Grid.Column width={8}>
                        <br />
                        <br />
                        <br />

                        <Search
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={this.handleSearchChange}
                            results={results}
                            value={value}
                            showNoResults={true}
                            fluid={true}
                            resultRenderer={this.viewItem}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(null, { movieInfo })(SearchComponent);
