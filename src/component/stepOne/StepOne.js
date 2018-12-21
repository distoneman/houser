import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class StepOne extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: null
        // }
    }

    handleChange = (key, val) => {
        console.log(val)
        this.setState({
            [key]: val
        });
    };


    render() {
        console.log(this.props)
        return (
            <div>
                <form>
                    <input type="text" placeholder='Property Name'
                        onChange={(e) => this.handleChange('name', e.target.value)}  />
                    <input type="text" placeholder='Adress'
                        onChange={(e) => this.handleChange('address', e.target.value)}  />
                    <input type="text" placeholder='City'
                        onChange={(e) => this.handleChange('city', e.target.value)}  />
                    <input type="text" placeholder='State'
                        onChange={(e) => this.handleChange('state', e.target.value)}  />
                    <input type="text" placeholder='zip'
                        onChange={(e) => this.handleChange('zip', e.target.value)}  />
                </form>
                <Link to='/wizard/step2'>
                    <button>Next Step</button>
                </Link>
            </div>

        )
    }
}

function mapStateToProps(rstate) {
    const { name, address, city, state, zip } = rstate;
    return {
        name,
        address,
        city,
        state,
        zip
    }
}

export default connect(mapStateToProps, {  })(StepOne); 