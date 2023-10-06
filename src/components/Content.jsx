import { Cards } from '../containers/Cards';
import { useSearch } from '../hooks/useSearch';
import { Loading } from './Loading';

export const Content = ({ arrayContent, title, showContent }) => {
  const {
    loading,
    hasMore
  } = useSearch();

  return (
    <div>
      {
        arrayContent.length > 0 && showContent?
          <>
            <p>{title}</p>
            <Cards
              arrayList={arrayContent}
            />
          </> : null
      }
      {
        loading && <Loading />
      }
      {
        !hasMore && <p>No hay más resultados</p>
      }
    </div>
  )
}
