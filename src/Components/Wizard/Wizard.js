import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import axios from 'axios'


export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleChange(prop, value) {
        this.setState({
            [prop]: value
        })
    }

    render() {
        let { name, address, city, state, zip } = this.state
        return (

            <div className='Wzrd'>
                <section>
                    <div></div>
                    <div className='inputs'>
                        <input type="text" value={name} onChange={e => this.handleChange('name', e.target.value)} />
                        <input type="text" value={address} onChange={e => this.handleChange('address', e.target.value)} />
                        <input type="text" value={city} onChange={e => this.handleChange('city', e.target.value)} />
                        <input type="text" value={state} onChange={e => this.handleChange('state', e.handleChange)} />
                        <input type="number" value={zip} onChange={e => this.handleChange('zip', e.target.value)} />
                    </div>
                </section>
            </div>
        )
    }
}