import { useState } from 'react';



function Contador() {

    console.log(useState(0))

    const [contador, setContador] = useState(0);
        

    return (
        <div>
            <p>Valor del contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    );
}
export default Contador;