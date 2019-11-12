import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { clear } from './../../dux/reducer';

function Wizard(props) {
    return (
        <div>
            <div>
                <h2 >Add New Listing</h2>
                <button onClick={_ => {
                    props.clear();
                    props.history.push('/')
                }}>Cancel</button>
            </div>

        </div>
    )
}

export default connect(null, { clear })(Wizard)