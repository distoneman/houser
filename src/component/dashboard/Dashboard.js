import React, { Component } from 'react';
import axios from 'axios';
import House from './../house/House.js'
import { Link } from 'react-router-dom'



export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }
    componentDidMount() {
        axios.get('/api/houses').then(res => {
            this.setState({ houses: res.data });
        });
    }

    deleteHouse(id) {
        console.log(id)
        axios.delete(`/api/houses?id=${id}`).then(res => {
            this.setState({ houses: res.data })
        })
    }

    render() {
        console.log(this.state.houses)
        let houseList = this.state.houses.map(house => {
            return (
                <House
                    key={house.id}
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    deleteHouse={this.deleteHouse}
                />
            )
        })
        return (
            <div>
                <div>Dashboard </div>
                <Link to='/wizard/step1'>
                    <button>Add New Property</button>
                </Link>
                {houseList}
            </div>
        )
    }
}