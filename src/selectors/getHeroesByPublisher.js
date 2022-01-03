import { heroes } from "../data/heroes";

export const getHeroByPublisher=(publisher)=>{
    const validPublisher= ['DC Comics', 'Marvel Comics'];


    //Si no lo encuentra
    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher ${publisher} no es correcto`);
    }

    return heroes.filter(hero => hero.publisher===publisher);
}