import { useCountry } from '../hooks/useCountry';
import { InfoWatchProviders } from './InfoWatchProviders';


export const SelectPais = ({ listaPaises, data }) => {
  
  const { selectedPais, obtenerValorPais, paisElegido } = useCountry({ listaPaises });  
  console.log(paisElegido)
  return (
    <>
      {
        listaPaises &&
        <select className={`form-select form-select-sm`} name="" id="" onChange={obtenerValorPais}>
          <option value="">Seleccione un país</option>
          {
          selectedPais && selectedPais
          .sort()
          .map((pais) => (
            <option key={pais.id} value={pais.id}>
              {
                pais.nombre
              }
            </option>
          ))
          }
        </select>
      }
      <InfoWatchProviders 
        paisElegido={paisElegido}
        data={data}
      />
    </>
  )
}
