/* API */

import '../styles/ejemplo05.css'
import { useEffect, useState } from 'react';

const Ejemplo05 = props => {

    /* Generate variables */
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);

    /* Hooks > useEffect, useState */
    /* fetch > Sirve para traer los datos y es antivo de JS. Se podría usar también axios. */
    /* async y await > Sirve para manejar errores. */

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setCharacters(res.results);
            setLoading(false);
        }

        loadData();

    }, []);

    

    return (
        <>
            <h1>Hello I am page Example 05 API</h1>
            {loading ? <p>Loading Data</p> :
                <div className="characters">
                    {characters.map(character => (
                        <div className="character" key={character}>
                            <h4>{character.name}</h4>
                            <div className="card">
                                <div className="image">
                                    <img src={character.image} alt={character.name} />
                                </div>
                                <div className="data">
                                    <h6>Species : {character.species === 'Human' ? 'Human' : character.species}</h6>
                                    <h6>Alive : {character.status === 'Alive' ? 'Yes' : 'No'}</h6>
                                </div>
                            </div>
                        </div>
                    ))} {/* Cierra el map. */}
                </div>
            } {/* Cierra el loading. */}
        </>
    )
}

export default Ejemplo05;