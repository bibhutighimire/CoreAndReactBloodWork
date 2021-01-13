import React, { Component } from 'react';
// Don't forget to "npm install axios" and import it on any pages from which you are making HTTP requests.
import axios from 'axios';
import { render } from 'react-dom';

// The name of the class is used in routing in App.js. The name of the file is not important in that sense.
export class BloodWork {

    constructor() {
        // 1) When we build the component, we assign the state to be loading, and register an empty list in which to store our forecasts.

        this.bloodWorkID = "";
        this.dateCreated = "";
        this.examDate = "";
        this.resultsDate = "";
        this.description = "";
        this.hemoglobin = "";
        this.hematocrit = "";
        this.whiteBloodCellCount = "";
        this.redBloodCellCount = "";

    }
}
export class AddBloodWork extends Component {
    constructor(props) {
        super(props);
        //this.state = { bloodWorkID: "", dateCreated: "", examDate: "", resultsDate: "", description: "", hemoglobin: "", hematocrit: "", whiteBloodCellCount: "", redBloodCellCount: "", loading: true };
        this.state = { bloodWorkID: "", dateCreated: "", examDate: "", resultsDate: "", description: "", hemoglobin: "", hematocrit: "", whiteBloodCellCount: "", redBloodCellCount: "", loading: true };
        this.initialize();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async initialize() {
        var BloodWorkID = this.props.match.params["BloodWorkID"];
        if (BloodWorkID > 0) {
            const response = await fetch('api/bloodworkapi/' + BloodWorkID);
            const data = await response.json();
            this.setState({ title: "Edit", bloodWork: data, loading: false });
        }
        else {
            this.state = { title: "Create", bloodWork: new BloodWork, loading: false};
        }
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


   
    

render() {
    let contents = this.state.loading
        ? <p><em>Loading</em></p>
        : this.renderCreateForm();
    return <div>
        <h1>{this.state.title}</h1>
        <h3>BloodWork</h3>
        <hr />
        {contents}
    </div>;
}

handleSave(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (this.state.bloodWork.bloodWorkID) {
        var response1 = fetch('api/bloodworkapi/' + this.state.bloodWork.bloodWorkID, { method:'PUT', body: data });
        this.props.history.push("ListOfBloodWorks");
    }
    else {
        var response2 = fetch('api/bloodworkapi', { method: 'POST', body: data });
        this.props.history.push("/ListOfBloodWorks");
    }
}
handleCancel(event) {
    event.preventDefault();
    this.props.history.push("/ListOfBloodWorks");
}
renderCreateForm() {
        return (
            <div>

                //<p>{this.state.waiting ? "Request sent, awaiting response." : "Response received, status: " + this.state.statusCode}</p>
                //<p>Response Data: {JSON.stringify(this.state.response)}</p>
                <form onSubmit={this.handleSave}>
                    <label htmlFor="bloodWorkID">BloodWork ID:</label>
                    <input id="bloodWorkID" type="text" value={this.state.bloodWork.bloodWorkID} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="dateCreated">Date Created:</label>
                    <input id="dateCreated" type="text" value={this.state.bloodWork.dateCreated} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="examDate">Exam Date:</label>
                    <input id="examDate" type="text" value={this.state.bloodWork.examDate} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="resultsDate">Results Date:</label>
                    <input id="resultsDate" type="text" value={this.state.bloodWork.resultsDate} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" value={this.state.bloodWork.description} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="hemoglobin">Hemoglobin:</label>
                    <input id="hemoglobin" type="text" value={this.state.bloodWork.hemoglobin} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="hematocrit">Hematocrit:</label>
                    <input id="hematocrit" type="text" value={this.state.bloodWork.hematocrit} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="whiteBloodCellCount">White Blood Cell Count:</label>
                    <input id="whiteBloodCellCount" type="text" value={this.state.bloodWork.whiteBloodCellCount} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="redBloodCellCount">Red Blood Cell Count:</label>
                    <input id="redBloodCellCount" type="text" value={this.state.bloodWork.redBloodCellCount} onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
    //async handleSubmit(event) {
    //    event.preventDefault();
    //    this.setState({ waiting: true });
    //    // Axios replaces fetch(), same concept. Send the response and "then" when it comes back, put it in the state.

       
    //    axios({
    //        method: 'post',
    //        url: 'bloodwork/api/create',
    //        params: {
    //            bloodWorkID: this.state.bloodWorkID,
    //            dateCreated: this.state.dateCreated,
    //            examDate: this.state.examDate,
    //            resultsDate: this.state.resultsDate,
    //            description: this.state.description,
    //            hemoglobin: this.state.hemoglobin,
    //            hematocrit: this.state.hematocrit,
    //            whiteBloodCellCount: this.state.whiteBloodCellCount,
    //            redBloodCellCount: this.state.redBloodCellCount
    //        }
    //    })
    //        .then((res) => {
    //            this.setState({ statusCode: res.status, response: res.data, waiting: false });
    //        })
    //        .catch((err) => {
    //            this.setState({ statusCode: err.response.status, response: err.response.data, waiting: false });
    //        });
//    }
//}
