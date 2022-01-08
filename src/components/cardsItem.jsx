import { Link } from "react-router-dom";

export default function CardsItem(props) {

    let data,
    path,
    id;

    if (props.categories) {
        data  = {id: props.categories.idCategory, name: props.categories.strCategory, img: props.categories.strCategoryThumb, descr: props.categories.strCategoryDescription, dots: '...', btnText: 'Смотреть категорию'};
        path = '/category/';
        id = data.name;
    }

    if (props.meals) {
        data  = {id: props.meals.idMeal, name: props.meals.strMeal, img: props.meals.strMealThumb, descr: '', dots: '', btnText: 'Смотреть рецепт'};
        path = '/recipe/';
        id = data.id;
    }


    return (
        <div className="card">
            <div className="card-image">
                <img src={data.img} alt={data.name}/>
                {/* <a href="!#" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
            </div>
            <div className="card-content">
                <span className="card-title">{data.name}</span>
                <p>{data.descr.slice(0, 100)}{data.dots}</p>
            </div>
            <div className="card-action">
                <Link to={`${path}${id}`} className="btn">{data.btnText}</Link> 
            </div>
        </div>
    );
}