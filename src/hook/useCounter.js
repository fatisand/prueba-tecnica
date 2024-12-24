import { useState } from "react"

export const useCounter = (valorInicial = 0, maximo = 10) => {
  
  const [contador, setContador] = useState(valorInicial)
  
  const incrementar = (valor = 1) => {
    if (contador < maximo){
        setContador(contador + valor)
    }
  }
  const decrementar = (valor  = 1) => {
    if (contador > 0){
        setContador(contador - valor)
    }
  }
  const reiniciar = (valor) => {
    setContador(0)
  }

  return {
    contador,
    reiniciar,
    incrementar,
    decrementar, 
    maximo
  }
}
