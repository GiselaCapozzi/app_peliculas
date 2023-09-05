import { useFetchInfo } from '../hooks/useFetchInfo';
import { useState } from 'react';

import { Credits } from '../components/Credits';
import { Recommendations } from '../components/Recommendations';
import { Videos } from './Videos';
import { Reviews } from '../components/Reviews';
import { WatchProviders } from '../components/WatchProviders';
import { Similar } from '../components/Similar';

export const MoreInfo = ({ id }) => {

const [endpoint, setEndpoint] = useState('');
const [show, setShow] = useState(false);

const { data } = useFetchInfo({id, endpoint});

console.log(data)

const showInfo = (titulo) => {
  setEndpoint(titulo)
  setShow(!show);
}

return (
  <>
    <Credits id={id}/>
    {/* <Videos id={id} /> */}
    <Reviews id={id} />
    <WatchProviders id={id}/>
    {/* <Recommendations id={id}/> */}
    {/* <Similar id={id}/> */}
  </>
)
}
