import React, { Component } from 'react';
import axios from 'axios';
import House from './../house/House.js'
import { Link } from 'react-router-dom'
// import './../../style.css'
import './dashboard.css'

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
        // console.log(this.state.houses)
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
                    img={house.img}
                    mortgage={house.mortgage}
                    rent={house.rent}
                    deleteHouse={this.deleteHouse}
                />
            )
        })
        return (
            <div className='dashboard_background'>
                <div className='dashboard_container'>
                    <div className='dashboard_header'>Dashboard</div>
                    <Link className='link_btn' to='/wizard/step1'>
                        <div className='add_property_btn'>Add New Property</div>
                    </Link>
                </div>
                <hr />
                <p className='listing_title'>Home Listings</p>
                {houseList}
            </div>

        )
    }
}