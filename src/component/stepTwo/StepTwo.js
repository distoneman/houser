import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class StepTwo extends Component {
    render() {
        return (
            <div>

                <input type="text" placeholder='Image URL' />
                {/* // onChange={(e) => this.handleChange('img', e.target.value)} value={this.state.img} /> */}
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