/* Importar alumnos desde el Json. */

import students from '../data/students.json';

const Ejemplo04 = props => {
    return (
            <> {/* Permite agregar más elementos, no es necesario que estén dentro de un div. */}
            <h1>HELLO I AM PAGE 04</h1>
            <ul>
                {students.map(student => (
                    <li>{student.name} {student.surname} - ({student.age})</li>
                )
                )}
            </ul>
            </>
    )
}

export default Ejemplo04;