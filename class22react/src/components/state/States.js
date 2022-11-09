import { useState } from "react";


/* Ejemplo 01. */

const Ejemplo01Estado = props => {

    const [active, setActive] = useState(true); /* VARIABLE (active) y FUNCIÓN (setActive) que modifica a la variable. Pone el estado activo por default. */

    const toggleActive = e => {
        setActive(!active);
    }

    return (
        <div>
            <input type='text' placeholder='click button' disabled={!active} />
            <button onClick={toggleActive}> {active ? 'Deactivate' : 'Activate'} </button>
        </div>
    )
}

/* Ejemplo 02. */

function Ejemplo02Estado(props) {
    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            <div className="counter">
                <h3>{`Counter: ${counter} `}</h3>
            </div>
            <div className="buttonGroup">
                <button className="success" onClick={() => setCounter(counter+1)}>+</button>
                <button className="error" onClick={() => setCounter(counter-1)}>-</button>
            </div>
        </div>
    )
}

export {
    Ejemplo01Estado,
    Ejemplo02Estado
}