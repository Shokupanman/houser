import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateMoney, clear } from './../../dux/reducer';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mortgage: 0,
            recommended: 0,
            rent: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.complete = this.complete.bind(this);
    }

    componentDidMount() {
        let { mortgage, rent } = this.props
        this.setState({ mortgage, rent })
    }

    handleChange(prop, value) {
        switch (prop) {
            case 'mortgage':
                this.setState({
                    mortgage: value, recommended: value * 1.25
                })
                break;
            case 'rent':
                this.setState({
                    rent: value
                })
        }
    }

    complete() {
        let { name, address, city, state, zip, img } = this.props;
        let house = {
            name, address, city, state, zip, img, ...this.state
        }
        axios.post('/api/pt2/house', house)
            .then(res => {
                this.props.clear();
                this.props.history.push('/')
            })
    }
    render() {
        return (
            <div>
                <div>
                    <div>You probably should rent @ ${this.state.recommended}</div>
                    <di>
                        <p>Monthly Mortgage Amount</p>
                        <input type='number' value={this.state.mortgage} onChange={e => this.handleChange('mortgage', e.target.value)} />
                    </di>
                    <div>
                        <p>Desired Monthly Rent</p>
                        <input type='number' value={this.state.rent} onChange={e => this.handleChange('rent', e.target.value)} />
                    </div>
                </div>
                <button onClick={_ => {
                    this.props.updateMoney(this.state);
                    this.props.history.push('/wizard/step2');
                }}>Previous Step</button>
                <button onClick={this.complete}>Complete</button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { updateMoney, clear })(Step3);
