import { Credits } from '../components/Credits';
import { Recommendations } from '../components/Recommendations';
import { Videos } from './Videos';
import { Reviews } from '../components/Reviews';
import { WatchProviders } from '../components/WatchProviders';
import { Similar } from '../components/Similar';

export const MoreInfo = ({id}) => {

return (
  <>
    <Credits id={id}/>
    {/* <Videos id={id} /> */}
    <Reviews id={id} />
    <WatchProviders id={id}/>
    <Recommendations id={id}/>
    <Similar id={id}/>
  </>
)
}
