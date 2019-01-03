import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip } from './../../ducks/reducer.js'


class StepOne extends Component {
    // constructor(props) {
        // super(props)
        // this.state = {
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: null
        // }
    // }

    handleChange = (key, val) => {
        // console.log(val)
        this.setState({
            [key]: val
        });
    };


    render() {
        // console.log(this.props)
        const {updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
        return (
            <div>
                <form>
                    <input type="text" placeholder='Property Name'
                        onChange={(e) => updateName(e.target.value)} value={this.props.name} />
                    <input type="text" placeholder='Adress'
                        onChange={(e) => updateAddress(e.target.value)} value={this.props.address} />
                    <input type="text" placeholder='City'
                        onChange={(e) => updateCity(e.target.value)} value={this.props.city} />
                    <input type="text" placeholder='State'
                        onChange={(e) => updateState(e.target.value)} value={this.props.state} />
                    <input type="text" placeholder='zip'
                        onChange={(e) => updateZip(e.target.value)} value={this.props.zip} />
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

export default connect(mapStateToProps,
    { updateName, 
        updateAddress, 
        updateCity,
        updateState,
        updateZip
    })(StepOne); 