import { Loading } from "../components/Loading";
import { Input } from "../components/Input";
import { useSearch } from "../hooks/useSearch";
import { Cards } from "./Cards";
import { Button } from "../components/Button";

export const Search = () => {

  const {
    search,
    handleSearchChange,
    searchResultsMovie,
    searchResultsTv,
    handleSearchSubmit,
    loading,
    hasMore,
    showMovie,
    showTv,
    showHiddenMovie,
    showHiddenTv,
    totalResultsMovie,
    totalResultsTv
  } = useSearch();

  return (
    <div style={{ width: '15wv' }}>
      <Input
        type='text'
        icono='bi bi-search'
        value={search}
        onChange={handleSearchChange}
        onClick={handleSearchSubmit}
      />
      <Button onClick={showHiddenMovie}>Peliculas {totalResultsMovie}</Button>
      <Button onClick={showHiddenTv}>Series {totalResultsTv}</Button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '95vw'
        }}
      >
        <div 
          style={{
            width: '50%'
          }}
        >
          {
            searchResultsMovie.length > 0 ?
              <>
                <p>Películas</p>
                <Cards
                  arrayList={searchResultsMovie}
                />
              </> : null
          }
        </div>
        <div
        style={{
          width: '50%'
        }}
        >
          {
            searchResultsTv.length > 0 ?
              <>
                <p>Series</p>
                <Cards
                  arrayList={searchResultsTv}
                />
              </> : null
          }
        </div>
      </div>
      {
        loading && <Loading />
      }
      {
        !hasMore && <p>No hay más resultados</p>
      }
    </div>
  )
}
