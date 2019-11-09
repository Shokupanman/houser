import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

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
        this.handleChange = this.handleChange(this)
    }

    handleChange(prop, value) {
        this.setState({
            [prop]: value
        })
    }

    componentDidMount() {
        let { name, address, city, state, zip } = this.props
        this.setState({ name, address, city, state, zip })
    }

    postHouse() {
        axios.post('/api/house', this.state)
            .then(res => {
                this.history.push('/')
            })
    }

    render() {
        let { name, address, city, state, zip } = this.state
        return (

            <div className='Wzrd'>
                <section>
                    <div>
                    </div>
                    <div className='inputs'>
                        <input type="text" value={name} onChange={e => this.handleChange('name', e.target.value)} />
                        <input type="text" value={address} onChange={e => this.handleChange('address', e.target.value)} />
                        <input type="text" value={city} onChange={e => this.handleChange('city', e.target.value)} />
                        <input type="text" value={state} onChange={e => this.handleChange('state', e.handleChange)} />
                        <input type="number" value={zip} onChange={e => this.handleChange('zip', e.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => {
                            this.props.updateLocal(this.state)
                            this.props.history.push('/wizard/step2')
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