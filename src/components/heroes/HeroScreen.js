import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

//const heroImages= require.context('../../../public/assets/heroes', true);


export const HeroScreen = ({history}) => {


    const {heroeid}= useParams();

    //Lo mismo del HeroesList.js aquí
    //La idea es memorizar lso resultados, si nuestra dependicencia se mantiene igual
    const hero=useMemo(()=>getHeroById(heroeid), [heroeid])
    //const hero=getHeroById(heroeid);

    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn=()=>{
        //Es decir, si no ha entrado a almenos dos paginas, pues lo retorne a la pagina principal
        if(history.lenght<=2){
            history.push('/')
        }
        history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } =  hero;
    
    return (
        <div className="row mt-5 animate__animated animate__bounceIn">

            <div className="col-4">

                <img src={`../assets/heroes/${heroeid}.jpg`}  alt={superhero} className="img-thumbnail animate__animated animate__zoomInLeft"/>

            </div>

            <div className="col-8">
                <h3>
                    {superhero}
                </h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>
                            Alter ego: {alter_ego}
                        </b>
                    </li>

                    <li className="list-group-item">
                        <b>
                            Publisher: {publisher}
                        </b>
                    </li>

                    <li className="list-group-item">
                        <b>
                            First appearance: {first_appearance}
                        </b>
                    </li>
                </ul>


                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                onClick={handleReturn}
                className="btn btn-outline-info" >
                    Return
                </button>

            </div>

           
        </div>
    )
}
