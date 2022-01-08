import reducer from "./reducer";
import React from "react";


const FoodContext = React.createContext();

const state = {
    catalog: [],
    meals: [],
    resipe: {},
    resipeLoad: true,
    value: '',
    filteredCatalog: []
};

const ContextProvider = ({children}) => {

    const [value, dispatch] = React.useReducer(reducer, state);

    value.setCatalog = (res = []) => {
        dispatch({type: 'SET_CATALOG', peyload: res});
    };

    value.setMeals = (res = []) => {
        dispatch({type: 'SET_MEALS', peyload: res});
    };

    value.setResipe = (res = []) => {
        dispatch({type: 'SET_RESIPE', peyload: res});
    };

    value.setResipeLoad = (bool) => {
        dispatch({type: 'SET_RESIPE_LOAD', peyload: bool});
    };

    value.setValue = (data) => {
        dispatch({type: 'SET_VALUE', peyload: data});
    };

    value.setFilteredCatalog = (data) => {
        dispatch({type: 'SET_FILTERED_CATALOG', peyload: data});
    };

    value.filterCategory = (str) => {
        dispatch({type: 'FILTER_CATALOG', peyload: str});
    };

    return (
        <FoodContext.Provider value={value}>{children}</FoodContext.Provider>
    )
};

export {FoodContext, ContextProvider};