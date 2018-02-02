import React from "react";
import { Button, Message, Segment, Divider } from "semantic-ui-react";

import api from "../../api/api.js";

class BookingsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            AllTheatres: [],
            Title: props.match.params.movie,
            loading: false
        };
    }

    componentWillMount() {
        api.user.theatres(this.state.Title).then(AllTheatres => {
            console.log(AllTheatres);
            this.setState({ AllTheatres });
        });
    }

    handleOnClick(record) {}
    // componentWillReceiveProps(nextProps) {
    //     api.user.review(nextProps.movieData.Title).then(MovieReviews => {
    //         console.log(MovieReviews);
    //         this.setState({ MovieReviews });
    //     });
    // }

    render() {
        return (
            <div>
                <h1>Theatre Info Page</h1>
                <Message info>
                    <Message.Header>
                        All Shows of {this.state.Title}{" "}
                    </Message.Header>
                    <Segment>
                        {this.state.AllTheatres.map((record, i) => {
                            return (
                                <ul key={i}>
                                    {Object.keys(record).map(v => {
                                        return (
                                            <li key={v}>
                                                {v + ":" + record[v]}
                                            </li>
                                        );
                                    })}
                                    {record["Seat"] > 0 ? (
                                        <Button
                                            primary
                                            floated="right"
                                            loading={this.state.loading}
                                            onClick={this.handleOnClick.bind(
                                                this,
                                                record
                                            )}
                                        >
                                            Click to confirm Booking
                                        </Button>
                                    ) : (
                                        <Button
                                            primary
                                            disabled={true}
                                            floated="right"
                                        >
                                            Sorry...HOUSEFULL
                                        </Button>
                                    )}
                                    <br />
                                    <Divider section={true} />
                                </ul>
                            );
                        })}
                    </Segment>
                </Message>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         movieData: state.movie
//     };
// }

// export default connect(mapStateToProps)(MovieInfoPage);
export default BookingsPage;
