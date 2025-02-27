import React from 'react';
import "./foodbox.css"

export function FoodBox(props){
    function todayFood(food){
        props.setTodays([props.todays, food])
    }
    return (
        <>
            {props.foods.map((currentFood) => {
                return(
                <>
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={currentFood.image} alt={props.name}/>
                                </figure>
                            </div>
                                <div className="media-content">
                                    <div className="content">
                                    <p>
                                        <strong>{currentFood.name}</strong> <br />
                                        <small>{`${currentFood.calories} cal`} </small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input className="input" type="number" value={1} />
                                    </div>
                                    <div className="control">
                                        <button className="button is-info"
                                        onClick={() => todayFood(currentFood)} >
                                        +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </>
                );
            })}
        
        </>
    )
}