import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateImg } from './../../dux/reducer'
class Step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({ img: this.props.img })
    }
    handleChange(value) {
        this.setState({ img: value })
    }

    render() {
        return (
            <div>
                <section>
                    <div>
                        <p>*Picture*</p>
                        <input style={{ width: "35vw" }} value={this.state.img} onChange={e => this.handleChange(e.target.value)} />
                    </div>
                </section>
                <button onClick={() => {
                    this.props.updateImg(this.state.img)
                    this.props.history.push('/step1')
                }}> RETURN </button>

                <button onClick={() => {
                    this.props.updateImg(this.state.img)
                    this.props.history.push('/step3')
                }}> >>>> </button>
            </div>
        )
    }
}
function stateToPropies(state) {
    return {
        img: state.img
    }
}

export default connect(stateToPropies, { updateImg })(Step2)