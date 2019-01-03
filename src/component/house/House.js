import React from 'react'
import './house.css'
import delete_btn from './../../images/delete_button.png'

export default function House(props) {
    return (
        <div className='house_container' key={props.id}>
            <div>
                <img className='house_image' src={props.img} alt='Home listing'/>
            </div>
            <div>
                Property Name: {props.name}<br/>
                Address: {props.address}<br/>
                City: {props.city}<br/>
                State: {props.state}<br/> 
                Zip: {props.zip}<br/>
            </div>
            <div>
                Monthly Mortgage: {props.mortgage}<br/>
                Desired Rent: {props.rent}
            </div>
            <img className='delete_btn' src={delete_btn} onClick={() => props.deleteHouse(props.id)} alt='Delete'/>
            {/* <button onClick={() => props.deleteHouse(props.id)}>Delete</button> */}
        </div>
    )
}