import React from 'react'

export default function House(props){
    return(
        <div>
            <h4>{props.name}</h4>
            <p>{props.address}</p>
            <p>{props.city}, {props.state} {props.zip}</p>
            <button>Delete</button>
        </div>
    )
}