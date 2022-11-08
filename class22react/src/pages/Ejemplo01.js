import { Ejemplo01Props, Ejemplo02Props, Ejemplo03Props, Ejemplo04Props, Ejemplo05Props } from "../components/props/Props";

const names2 = 'Hunny';
const list = ['manzana', 'banana', 'pera', 'frutillas'];
const showValue = value => {
    console.log(value);
}

const Ejemplo01 = props => {
    return (
        <div>
            <h1>Properties Examples</h1>
            {/* Simple property example, can be re-used. */}
            <Ejemplo01Props names="Gemy" />
            <Ejemplo01Props names={names2} />
            <hr />

            {/* List example. */}
            <Ejemplo02Props elements={list} />
            <hr />

            {/* Multiple variables with destructuring. */}

            {<Ejemplo03Props title="The News" subtitle="I am the News Subtitle" body="Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur adipisicing." />}
            <hr />

            <Ejemplo04Props changeValue={showValue} />

            <Ejemplo05Props eventClick={showValue}/> 

        </div>
    )
}

export default Ejemplo01;