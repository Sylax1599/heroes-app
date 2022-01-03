import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroesList = ({publisher}) => {


    //LA IDEA DE USAR EL USEMEMO ES QUE NO SE VUELVA A DISPARAR EL PROCEDIMIENTO PARA OBTENER LOS HEROES
    //EL [publisher], es que si el publisher cambia, entonces ahí sí llamar la funcion getHeroByPublisher 
    const heroes=useMemo(() => getHeroByPublisher(publisher), [publisher])

    //const heroes=getHeroByPublisher(publisher);




    return (
        <div className="card-columns animate__animated animate__headShake">

        {
            heroes.map(hero =>(
                <HeroCard 
                {...hero}
                key={hero.id} />

                
            ))
        }
            
        </div>

    )
}
