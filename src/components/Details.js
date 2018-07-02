import React, { Component } from 'react';
import axios from 'axios'
class Details extends Component {

    constructor() {
        super();

        this.state = {
            details: []
        };


    }
    componentDidMount() {
        axios.get(`api/cards/${this.props.card}`).then(res => {
            console.log(res.data);
            this.setState({
                details: res.data.card
            });
        })


    }
    render() {
        let { details } = this.state
        return (
            <div>
                <h1>Details</h1>
                <img src={this.state.details.imageUrl} alt={this.state.details.name} />
                <ul>
                    <li>Name: {details.name}</li>
                    <li>Colors: {details.colors}</li>
                    <li>Rarity: {details.rarity}</li>
                    <li>Set Name: {details.setName}</li>
                </ul>

            </div>
        );
    }
}

export default Details;