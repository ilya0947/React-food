import { FoodContext } from "../context";
import React from "react";
import CardsItem from "./cardsItem";

export default function CategoriesList() {
    const {filteredCatalog} = React.useContext(FoodContext);

    return (
        <div className="list">
            {filteredCatalog.map(el => (
                <CardsItem key={el.idCategory} categories={el}/>
            ))}
        </div>
    );
}