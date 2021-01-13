import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class DetailsBloodWork extends Component {
    static displayName = DetailsBloodWork.name;

    constructor(props) {
        super(props);
        this.state = { bloodworks: [], loading: true };
    }

    componentDidMount() {
        // 2) When the component mounts, we make the async call to the server to retrieve the API results.
        this.populateDetailsData();
    }

    renderDetailsTable(bloodworks) {
        return (<>
            <Link to="/ListOfBloodWorks">Back to List of Blood Works</Link>
                
                 
                    <tr>Exam Date <td>{bloodworks.examDate}</td> </tr>
                        
       
        </>);

    }

    
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderDetailsTable(this.state.bloodworks);

        return (
            <div>
                <h1 id="tabelLabel" >List of all the blood works</h1>
                <p>Details below:</p>
                {contents}
            </div>
        );
    }

    async populateDetailsData(id) {
        axios.get(`bloodwork/api/details/` + id)
            .then(res => {
                const data = res.data;
                this.setState({ bloodworks: data, loading: false });
            })
        }
}
