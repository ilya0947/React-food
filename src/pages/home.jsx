import React from "react";
import { useLocation } from "react-router-dom";
import { FoodContext } from "../context";
import { getAllCategories } from "../api";
import Preloader from "../components/preloader";
import CategoriesList from "../components/categoriesList";
import Search from "../components/search";


export default function Home() {

    const {catalog, setCatalog, setFilteredCatalog} = React.useContext(FoodContext);

    const {search} = useLocation();

    React.useEffect(() => {
        getAllCategories()
        .then(res => {
            setCatalog(res.categories);
            setFilteredCatalog(search ? 
                res.categories.filter(item => 
                   item.strCategory
                   .toLowerCase()
                   .includes(search.split('=')[1].toLowerCase())
                ) : res.categories);
        })
        .catch(() => alert('error'));
     //eslint-disable-next-line   
    }, [search]);

    return (
        <>
            <Search/>
            {!catalog.length ? <Preloader/> : <CategoriesList/>}
        </>
    );
}