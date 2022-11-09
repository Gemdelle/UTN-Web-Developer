
import { Ejemplo01Estado, Ejemplo02Estado } from "../components/state/States";
import '../styles/styles.css'

const Ejemplo02 = props => {

    return (
        <div>
            <h1>State Examples</h1>
            <Ejemplo01Estado />
            <hr />
            <Ejemplo02Estado />
        </div>
    )
}

export default Ejemplo02;