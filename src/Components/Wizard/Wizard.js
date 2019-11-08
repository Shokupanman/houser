import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import axios from 'axios'


export default class Wizard extends Component {
    constructor(props) {
        super(props)


        render() {
            return (

                <div className='Wzrd'>
                    <div className='button'>
                        <button onClick={() => this.props.history.push('/')}>X</button>
                    </div>
                </div>
            )
        }
    }