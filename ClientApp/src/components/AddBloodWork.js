import React, { Component } from 'react';
// Don't forget to "npm install axios" and import it on any pages from which you are making HTTP requests.
import axios from 'axios';

// The name of the class is used in routing in App.js. The name of the file is not important in that sense.
export class AddBloodWork extends Component {
    static displayName = AddBloodWork.name;

    constructor(props) {
        // 1) When we build the component, we assign the state to be loading, and register an empty list in which to store our forecasts.
        super(props);
        this.state = { bloodWorkID: "", dateCreated: "", examDate: "", id: "", resultsDate: "", description: "", hemoglobin: "", hematocrit: "", whiteBloodCellCount: "", redBloodCellCount: "", waiting: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.bloodWorkID) {
            case "bloodWorkID":
                this.setState({ bloodWorkID: event.target.value });
                break;
            case "dateCreated":
                this.setState({ dateCreated: event.target.value });
                break;
            case "examDate":
                this.setState({ examDate: event.target.value });
                break;
            case "resultsDate":
                this.setState({ resultsDate: event.target.value });
                break;
            case "description":
                this.setState({ description: event.target.value });
                break;
            case "hemoglobin":
                this.setState({ hemoglobin: event.target.value });
                break;
            case "hematocrit":
                this.setState({ hematocrit: event.target.value });
                break;
            case "whiteBloodCellCount":
                this.setState({ whiteBloodCellCount: event.target.value });
                break;
            case "redBloodCellCount":
                this.setState({ redBloodCellCount: event.target.value });
                break;
        }

    }


    // Either way we render the AKK DETAILS
    render() {
        return (
            <div>
                <p>{this.state.waiting ? "Request sent, awaiting response." : "Response received, status: " + this.state.statusCode}</p>
                <p>Response Data: {JSON.stringify(this.state.response)}</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="bloodWorkID">BloodWork ID:</label>
                    <input id="bloodWorkID" type="text" value={this.state.bloodWorkID} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="dateCreated">Date Created:</label>
                    <input id="dateCreated" type="text" value={this.state.dateCreated} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="examDate">Exam Date:</label>
                    <input id="examDate" type="text" value={this.state.examDate} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="resultsDate">Results Date:</label>
                    <input id="resultsDate" type="text" value={this.state.resultsDate} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" value={this.state.description} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="hemoglobin">Hemoglobin:</label>
                    <input id="hemoglobin" type="text" value={this.state.hemoglobin} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="hematocrit">Hematocrit:</label>
                    <input id="hematocrit" type="text" value={this.state.hematocrit} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="whiteBloodCellCount">White Blood Cell Count:</label>
                    <input id="whiteBloodCellCount" type="text" value={this.state.whiteBloodCellCount} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="redBloodCellCount">Red Blood Cell Count:</label>
                    <input id="redBloodCellCount" type="text" value={this.state.redBloodCellCount} onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }


    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ waiting: true });
        // Axios replaces fetch(), same concept. Send the response and "then" when it comes back, put it in the state.

       
        axios({
            method: 'post',
            url: 'bloodwork/api/create',
            params: {
                bloodWorkID: this.state.bloodWorkID,
                dateCreated: this.state.dateCreated,
                examDate: this.state.examDate,
                resultsDate: this.state.resultsDate,
                description: this.state.description,
                hemoglobin: this.state.hemoglobin,
                hematocrit: this.state.hematocrit,
                whiteBloodCellCount: this.state.whiteBloodCellCount,
                redBloodCellCount: this.state.redBloodCellCount
            }
        })
            .then((res) => {
                this.setState({ statusCode: res.status, response: res.data, waiting: false });
            })
            .catch((err) => {
                this.setState({ statusCode: err.response.status, response: err.response.data, waiting: false });
            });
    }
}
