import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import House from '../House/House'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this)
        this.deleteHouses = this.deleteHouses.bind(this)
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses() {
        axios
            .get('/api/pt2/houses')
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
    }

    deleteHouses(id) {
        axios
            .delete(`/api/pt/houses/${id}`)
            .then(res => this.getHouses())
    }
    render() {

        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={() => this.props.history.push('/api/wizard/step1')}> Add New Property </button>
                {this.state.houses.map(el => {
                    return <House house={el} deleteHouses={this.deleteHouses} key={el.id} />
                })}
            </div>
        )
    }
}