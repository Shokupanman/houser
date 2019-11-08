import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import House from '../House/House'
import axios from 'axios';


export default class Dashboard extends Component {
    constructor() {
        super()
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
            .get('/api/houses')
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
    }

    deleteHouses(id) {
        axios
            .delete(`/api/houses/${id}`)
            .then(res => this.getHouses())
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <House />

                <button>Add New Propety</button>
            </div>
        )
    }
}