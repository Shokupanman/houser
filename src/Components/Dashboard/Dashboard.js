import React, { Component } from 'react'
import { Switch, Route, withRouter, Link } from "react-router-dom";
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
        const houses = this.state.houses.map(house => {
            return (
                <House key={house.id} house={house} deleteHouse={this.deleteHouses} />
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                {houses}
                <Link to='/step1' />
                <button onClick={() => this.props.history.push('/step1')}> Add New Property </button>
                {this.state.houses.map(el => {
                    return <House house={el} deleteHouses={this.deleteHouses} key={el.id} />
                })}
            </div>
        )
    }
}