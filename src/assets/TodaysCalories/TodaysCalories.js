import React from 'react'

export function TodaysCalories(props){
    return(
        <>
            <ul>
                <li>{props.quantity} {props.name} = {props.calories}</li>
            </ul>
        </>
    )
}