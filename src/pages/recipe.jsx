import { useParams, useHistory } from "react-router-dom";
import React from "react";
import { getMealById } from "../api";
import { FoodContext } from "../context";
import Preloader from "../components/preloader";


export default function Recipe() {
    
    const {id} = useParams();

    const {goBack} = useHistory();

    const {resipeLoad, resipe, setResipe, setResipeLoad} = React.useContext(FoodContext);

    React.useEffect(() => {
        setResipeLoad(true);
        getMealById(id)
        .then(res => setResipe(res.meals[0]))
        .catch(() => alert('error'))
        .finally(() => setResipeLoad(false));
       //eslint-disable-next-line   
    }, [id]);

    // console.log(Object.keys(resipe));
    
    const {strMealThumb: img, strMeal: name, strCategory: category, strArea, strInstructions: descr, strYoutube: video} = resipe;

    return (
       <>
            {
                resipeLoad ? <Preloader/> : 
                <div className="resipe">
                    <img src={img} alt={name} />
                    <h2>{name}</h2>
                    <h6>{category}</h6>
                    {strArea ? <h6>{strArea}</h6> : null}
                    <p>{descr}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ингридиент</th>
                                <th>Количество</th>
                            </tr>
                        </thead>
                            
                        <tbody>
                            {Object.keys(resipe).map(key => {
                                if (key.includes('Ingredient') && resipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{resipe[key]}</td>
                                            <td>{
                                                resipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {video ? (
                        <div className="row">
                            <h5>Video resipe</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${video.slice(-11)}`} allowFullScreen/>
                        </div>
                    ) : null}
                </div>
            }
            <button onClick={goBack} className="btn">Назад</button>
       </>
    );
}