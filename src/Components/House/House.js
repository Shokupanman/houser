import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";


export default function house(props) {
    let { id, name, address, city, state, zip } = props.house
    console.log(name)
    return (
        <div>
            <section>
                <p>Name: {name}</p>
                <p>Address: {address}  </p>
                <p> City: {city}</p>
                <p> State: {state}</p>
                <p> Zip: {zip}</p>
            </section>
            <button className='deleteButton' onClick={() => props.deleteHouses(id)}>X</button>
        </div>
    )
}