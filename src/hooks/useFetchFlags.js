import { useEffect, useState } from "react";
import { getFlags } from '../services/getFlags';

export const useFetchFlags = () => {
  
  const [flags , setFlags] = useState();

  useEffect(() => {
    getFlags()
      .then(res => setFlags(res))
  }, [])
  
  return {
    flags
  }
}
