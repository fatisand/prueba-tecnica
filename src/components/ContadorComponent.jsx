import {useCounter} from "../hook/useCounter.js"
const ContadorComponent = () => {
  
  const{contador, reiniciar, incrementar, decrementar, maximo} = useCounter(0)
  return (
    <>
        <div className="mt-2"> 
          <h1>Contador: {contador} </h1>
          <button className="btn btn-outline-danger" onClick={() => reiniciar()}>Reiniciar</button>
          <button className="btn btn-outline-success" onClick={() => incrementar(1)}>Incrementar</button>
          <button className="btn btn-outline-success" onClick={() => decrementar(1)}>Decrementar</button>
        </div>
        {contador === maximo  && 
        <div class="alert alert-warning mt-3" role="alert">
          Has alcanzado el número máximo!
        </div>}  
    </>
  )
}

export default ContadorComponent
