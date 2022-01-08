import { useParams, useHistory } from "react-router-dom";
import React from "react";
import { getFilterCategory } from "../api";
import { FoodContext } from "../context";
import CardsItem from "../components/cardsItem";
import Preloader from "../components/preloader";


export default function Category() {
    
    const {name} = useParams();

    const {goBack} = useHistory();

    const {meals, setMeals} = React.useContext(FoodContext);

    React.useEffect(() => {
        getFilterCategory(name)
        .then(res => setMeals(res.meals));
       //eslint-disable-next-line   
    }, [name]);
    

    return (
       <>
            {
                !meals.length ? <Preloader/> : 
                <div className="list">
                    {meals.map(el => (
                        <CardsItem key={el.idMeal} meals={el}/>
                    ))}
                </div>
            }
            <button onClick={goBack} className="btn">Назад</button>
       </>
    );
}