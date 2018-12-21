import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null
        }
    }
    componentDidMount() {

    }

    handleChange = (key, val) => {
        console.log(val)
        this.setState({
            [key]: val
        });
    };

    // addItem = () => {
    addHouse(){
        const { name, address, city, state, zip } = this.state
        axios.post('/api/houses', { name, address, city, state, zip }).then(res => {
            console.log(res.data)
        })
    }

    render() {

        return (
            <div>Wizard
                <form>
                    <input type="text" placeholder='Property Name'
                        onChange={(e) => this.handleChange('name', e.target.value)} value={this.state.name} />
                    <input type="text" placeholder='Adress'
                        onChange={(e) => this.handleChange('address', e.target.value)} value={this.state.address} />
                    <input type="text" placeholder='City'
                        onChange={(e) => this.handleChange('city', e.target.value)} value={this.state.city} />
                    <input type="text" placeholder='State'
                        onChange={(e) => this.handleChange('state', e.target.value)} value={this.state.state} />
                    <input type="text" placeholder='zip'
                        onChange={(e) => this.handleChange('zip', e.target.value)} value={this.state.zip} />
                </form>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <Link to='/'>
                    <button onClick={() => this.addHouse()} >Continue</button>
                </Link>
            </div>
        )
    }
}