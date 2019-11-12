import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateLocal } from './../../dux/reducer'
class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        let { name, address, city, state, zip } = this.props
        this.setState({ name, address, city, state, zip })
    }

    handleChange(prop, value) {
        switch (prop) {
            case 'state':
                if (value.length > 2) {
                    return
                }
                break;
            case 'zip':
                if (value.length > 5) {
                    return
                }
                break;
            default:
                break;
        }
        this.setState({ [prop]: value })
    }
    render() {
        let { name, address, city, state, zip } = this.state
        return (

            <div className='Wzrd'>
                <section>
                    <div>
                    </div>
                    <div className='inputs'>
                        <h3>Name:
                        <input type="text" value={name} onChange={e => this.handleChange('name', e.target.value)} />
                        </h3>
                        <h3>Address
                        <input type="text" value={address} onChange={e => this.handleChange('address', e.target.value)} />
                        </h3>
                        <h3>City
                        <input type="text" value={city} onChange={e => this.handleChange('city', e.target.value)} />
                        </h3>
                        <h3> State
                        <input type="text" value={state} onChange={e => this.handleChange('state', e.target.value)} />
                        </h3>
                        <h3> Zip
                        <input type="number" value={zip} onChange={e => this.handleChange('zip', e.target.value)} />
                        </h3>
                    </div>
                    <div>
                        <button onClick={() => {
                            this.props.updateLocal(this.state)
                            this.props.history.push('/step2')
                        }}> >>>> </button>
                    </div>
                </section>
            </div>
        )
    }
}
function stateToPropies(reduxState) {
    let { name, address, city, state, zip } = reduxState;
    return { name, address, city, state, zip }
}

export default connect(stateToPropies, { updateLocal })(Step1)