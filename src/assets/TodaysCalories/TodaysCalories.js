import React from 'react'

export function TodaysCalories(props){
    return(
        <>
        <h1>Today's Food</h1>
        <ul>
            {props.todays.map((currentFood) => {
            return(
                 <li>{`${currentFood.quantity} ${currentFood.name} = ${currentFood.calories} cal`}</li>
            ) 
            })}    
        </ul>
        </>
    )
}