import React  from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { FoodBox } from './assets/FoodBox/FoodBox';
import { NavBar } from './assets/NavBar/NavBar';
import foods from './foods.json';
import { TodaysCalories } from './assets/TodaysCalories/TodaysCalories';
import { useState } from 'react';


function App() {
  const [food, setFood] = useState([...foods]);
  const [todays, setTodays] = useState([]);

  function filterFoods(filterParams) {
    if (filterParams === "") {
      setFood(foods);
      return;
    }

    const filtred = foods.filter((currentFood) => {
      return currentFood.name
        .toLowerCase()
        .includes(filterParams.toLowerCase());
    });

    setFood(filtred);
  }

  return (
    <div className="App">
      <NavBar filterState={filterFoods}/>
        <div className='outputs'>
          <div className='foods'>
            <FoodBox
              foods ={foods}
              setTodays = {setTodays}
              todays = {todays}
            />
          </div>
          <div className='todays'>
            <TodaysCalories todays= {todays} />
          </div> 
        </div> 
    </div>
  );
}

export default App;
