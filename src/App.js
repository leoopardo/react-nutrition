import React  from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { FoodBox } from './assets/FoodBox/FoodBox';
import { NavBar } from './assets/NavBar/NavBar';
import foods from './foods.json';
import { TodaysCalories } from './assets/TodaysCalories/TodaysCalories';


function App() {
  return (
    <div className="App">
    <NavBar />
      <div className='foods'>
        {foods.map((foods) => <FoodBox
          name={foods.name}
          image={foods.image}
          calories={foods.calories}
          quantity={foods.quantity}
      />)}
      </div>
      <div>
        <TodaysCalories />
      </div>
    </div>
  );
}

export default App;
