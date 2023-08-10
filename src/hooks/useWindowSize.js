import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  
  // Inicializo el estado con undefined para que el servidor y el cliente coincidan
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  
  useEffect(() => {
    // Controlador para llamar al cambio de tamaño de ventana
    function handleResize() {
      // Establecer el ancho/alto de la ventana en el estado
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    // Agregar un escuchador de evento
    window.addEventListener('resize', handleResize);
    handleResize()
    // Eliminar el escuchador de evento o limpiarlo
    return () => window.removeEventListener('resize', handleResize)
  }, []);
  
  return windowSize;
}
