import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { clear } from './../../dux/reducer';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

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
            <Route path='/wizard/step1' component={Step1} />
            <Route path='/wizard/step2' component={Step2} />
            <Route path='/wizard/step3' component={Step3} />
        </div>
    )
}

export default connect(null, { clear })(Wizard)