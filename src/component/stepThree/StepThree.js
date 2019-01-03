import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateMortgage, updateRent, resetState } from './../../ducks/reducer.js'

class StepThree extends Component {
    
    addHouse(){
        const { name, address, city, state, zip, img, mortgage, rent } = this.props
        axios.post('/api/houses', { name, address, city, state, zip, img, mortgage, rent }).then(res => {
            console.log(res.data)
            this.props.resetState()
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>

                <input type="text" placeholder='Mortgage Amount'
                    onChange={(e) => this.props.updateMortgage(e.target.value)} value={this.props.mortgage} />
                <input type="text" placeholder='Monthly Rent'
                    onChange={(e) => this.props.updateRent(e.target.value)} value={this.props.rent} />
                <Link to='/wizard/step2'>
                    <button>Previous Step</button>
                </Link>
                {/* <Link to='/'> */}
                    <button onClick={() => this.addHouse()} >Complete</button>
                {/* </Link> */}
            </div>
        )
    }
}

function mapStateToProps(rstate) {
    const { name, address, city, state, zip, img, mortgage, rent } = rstate;
    return {
        name, 
        address,
        city,
        state,
        zip,
        img,
        mortgage,
        rent
    }
}
export default connect(mapStateToProps,
    { updateMortgage, updateRent, resetState })(StepThree); 