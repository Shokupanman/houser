import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";

export default function House(props) {
    let { id, name, address, city, state, zip, img, mortgage, rent } = props.house
    console.log(name)
    return (
        <div>
            <div style={{ backgroundImage: `url('${img}')` }}></div>
            <section>
                <p>Name: {name}</p>
                <p>Address: {address}  </p>
                <p> City: {city}</p>
                <p> State: {state}</p>
                <p> Zip: {zip}</p>
            </section>
            <div>
                <p>Monthly Mortgage: {mortgage}</p>
                <p>Desired Rent: {rent}</p>
            </div>
            <button className='deleteButton' onClick={() => props.deleteHouses(id)}>X</button>
        </div>
    )
}