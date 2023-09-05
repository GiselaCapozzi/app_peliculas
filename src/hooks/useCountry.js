import { useEffect, useState } from "react";
import { getFlags } from "../services/getFlags";

export const useCountry = ({ listaPaises }) => {
  
  const [nombrePaises, setNombrePaises] = useState();
  const [selectedPais, setSelectedPais] = useState();
  const [paisElegido, setPaisElegido] = useState();

  const obtenerNombres = () => {
    let nombres = [];
    let paises = [];
    if (listaPaises) {
      for (let i = 0; i <= listaPaises.length - 1; i++) {
        paises.push(listaPaises[i])
      }
    }
    
    for (let j = 0; j <= paises.length - 1; j++) {
      for (const pais in nombrePaises) {
        if (pais === paises[j]) {
          nombres.push({
            nombre: nombrePaises[pais],
            id: paises[j]
          })
        }
      }
    }
    return nombres
  }

  const obtenerValorPais = e => {
    setPaisElegido(e.target.value);
  }
  
  useEffect(() => {
    getFlags()
    .then((response) => {
      setNombrePaises(response);
    })
    setSelectedPais(obtenerNombres())
  }, [listaPaises])

  return {
    selectedPais,
    obtenerValorPais,
    paisElegido
  }
}
