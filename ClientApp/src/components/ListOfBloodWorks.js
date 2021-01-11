import React, { Component } from 'react';
import axios from 'axios';

export class ListOfBloodWorks extends Component {
    static displayName = ListOfBloodWorks.name;

    constructor(props) {
        super(props);
        this.state = { bloodworks: [], loading: true };
    }

    componentDidMount() {
        // 2) When the component mounts, we make the async call to the server to retrieve the API results.
        this.populateBloodworkData();
    }


    static renderBloodWorkTable(bloodworks) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date Created</th>
                        <th>Exam Date</th>
                        <th>Results Date</th>
                        <th>Description</th>
                        <th>Hemoglobin</th>
                        <th>Hematocrit</th>
                        <th>White Blood Cell Count (Number)</th>
                        <th>Red Blood Cell Count (Number)</th>
                      

                    </tr>
                </thead>
                <tbody>
                    {bloodworks.map(bloodwork =>
                        <tr key={bloodwork.bloodWorkID}>
                         
                            <td>{bloodwork.dateCreated}</td>
                            <td>{bloodwork.examDate}</td>
                            <td>{bloodwork.resultsDate}</td>
                            <td>{bloodwork.description}</td>
                            <td>{bloodwork.hemoglobin}</td>
                            <td>{bloodwork.hematocrit}</td>
                            <td>{bloodwork.whiteBloodCellCount}</td>
                            <td>{bloodwork.redBloodCellCount}</td>


                        </tr>
                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ListOfBloodWorks.renderBloodWorkTable(this.state.bloodworks);

        return (
            <div>
                <h1 id="tabelLabel" >List of all the blood works</h1>
                <p>List of all the blood works are displayed below:</p>
                {contents}
            </div>
        );
    }


    async populateBloodworkData() {
        axios.get(`bloodwork/api/All`)
            .then(res => {
                const data = res.data;
                this.setState({ bloodworks: data, loading: false });
            })
    }
}
