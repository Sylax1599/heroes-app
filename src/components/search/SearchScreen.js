import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    //Hooks para obtener la location
    const location=useLocation();

    const {q=''} = queryString.parse(location.search);
    

    const initialForm={
        hero: q
    };

    const [formValues, handleInputChange] = useForm(initialForm)
    
    const {hero}=formValues;


    //Con esta instruccion, el va a filtrar en tiempo real, no queremos eso, queremos buscar cuando se le da enter

    //const heroesFiltered= getHeroesByName(hero);
    //Por lo que usaremos el useMemo
    const heroesFiltered=useMemo(()=>getHeroesByName(q), [q]);


    const handleSearch=(e)=>{
        e.preventDefault();
        history.push(`?q=${hero}`);
    }


    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        name="hero"
                        placeholder="Find your hero"
                        className="form-control"
                        onChange={handleInputChange}
                        autoComplete="off"
                        value={hero}
                        />

                        <button 
                        type="submit"
                        className="btn btn-block btn-outline-primary mt-2"
                        >
                            Search

                        </button>

                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>

                    {
                    
                    (q==='')
                    ?
                    (
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                    )
                    :
                    null
                    }


                    {
                        (q!=='' && heroesFiltered.length===0)
                        ?
                        (
                            <div className="alert alert-danger">
                                 There is not a hero with {q}
                            </div>
                        )
                        :
                        null
                    }

                    {
                        heroesFiltered.map(hero =>(
                            <HeroCard
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
