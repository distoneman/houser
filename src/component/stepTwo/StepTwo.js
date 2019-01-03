import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from './../../ducks/reducer.js'

class StepTwo extends Component {
    render() {
        // console.log('props is ', this.props)
        return (
            <div>
                <input type="text" placeholder='Image URL'
                    onChange={(e) => this.props.updateImage(e.target.value)} value={this.props.img} />
                <Link to='/wizard/step1'>
                    <button>Previous Step</button>
                </Link>

                <Link to='/wizard/step3'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(rstate) {
    const { img } = rstate;
    return {
        img
    }
}
export default connect(mapStateToProps,
    { updateImage })(StepTwo); 