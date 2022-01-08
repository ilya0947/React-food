import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { FoodContext } from "../context";

export default function Search() {

    const {value, setValue, filterCategory} = React.useContext(FoodContext);

    const {pathname} = useLocation();
    const {push} = useHistory();


    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        filterCategory(value);
        push({pathname, search: `?search=${value}`});
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input type="search"
                    placeholder="Поиск"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button onClick={handleSubmit} className="btn pos">Искать</button>
            </div>
        </div>
    )
}