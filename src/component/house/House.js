import React from 'react'

export default function House(props){
    return(
        <div>
            <h4>{props.name}, {props.id}</h4>
            <p>{props.address}</p>
            <p>{props.city}, {props.state} {props.zip}</p>
            <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
        </div>
    )
}