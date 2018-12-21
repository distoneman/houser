import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

export default class StepThree extends Component {
    
    addHouse(){
        const { name, address, city, state, zip } = this.state
        axios.post('/api/houses', { name, address, city, state, zip }).then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>

                <input type="text" placeholder='Mortage Amount'
                    onChange={(e) => this.handleChange('mortage', e.target.value)} value={this.state.mortage} />
                <input type="text" placeholder='Monthly Rent'
                    onChange={(e) => this.handleChange('rent', e.target.value)} value={this.state.rent} />
                <Link to='/'>
                    <button onClick={() => this.addHouse()} >Complete</button>
                </Link>
            </div>
        )
    }
}