/* 01. Nombres */

const Ejemplo01Props = props => {
    return (
        <h3>Hello {props.names}</h3>
    )
}

/* 02. Listado */

const Ejemplo02Props = props => {
    const { elements } = props;

    return (
        <ul>
            {elements.map(element => <li key={element}>{element}</li>)}
        </ul>
    )
}

/* 03. Destructuring */

const Ejemplo03Props = ({ title, subtitle, body }) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{body}</p>
        </div>
    )
}

const Ejemplo04Props = props => {
    return (
        /* Al ejecutar el event onChange el input va a tomar lo que sucede en la función changeValue, entonces recibimos la propiedad de ChangeValue. */
        <label>View in Console: <input type="text" onChange={(e) => props.changeValue(e.target.value)} />
        </label>
    )
}

/* 05. Event onClick. Shows in Console how many times the button has been clicked. */

const Ejemplo05Props = props => {
/* Definir la función que va a manejar el evento del click. */

    const handleClick = e => {
        /* if > validar que estén pasando la propiedad (prop) que necesito (eventClick) */
        if(props.eventClick){
            /* Si la estoy pasando, sale 'Me clickeaste' */
            props.eventClick('You clicked me');
        }
    }

    return(
        <p>
            <button onClick={handleClick}>Click me!</button>
        </p>
    )
}



export {
    Ejemplo01Props,
    Ejemplo02Props,
    Ejemplo03Props,
    Ejemplo04Props,
    Ejemplo05Props
}