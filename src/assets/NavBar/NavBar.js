import React  from 'react';
import "./navbar.css"

export function NavBar(props){
    return(
    <>
    <div className='iron'>
        <h1 >Iron Nutrition</h1>
    </div>
    <input className='navbar' placeholder='search for a food' ></input>
    </>
    )
}