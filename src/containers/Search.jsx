import { Loading } from "../components/Loading";
import { Input } from "../components/Input";
import { useSearch } from "../hooks/useSearch";
import { Cards } from "./Cards";
import { Button } from "../components/Button";
import styles from '../styles/search.module.css';
import { useWindows } from "../context/windowSizeProvider";
import { Content } from "../components/Content";
import { useNavigate } from "react-router-dom";

export const Search = () => {

  const {
    search,
    handleSearchChange,
    searchResultsMovie,
    searchResultsTv,
    handleSearchSubmit,
    loading,
    totalResultsMovie,
    totalResultsTv,
    handleScroll,
    showHiddenContent,
    showMovie,
    showTv
  } = useSearch();

  const windowSize = useWindows();
  
console.log(searchResultsMovie)

  return (
    <div className={styles.container}>
      <Input
        type='text'
        icono='bi bi-search'
        value={search}
        onChange={handleSearchChange}
        onClick={handleSearchSubmit}
      />
      <div className={styles.container_buttons}>
      <Button
        className={styles.button_content}
        onClick={showHiddenContent}
        id='movie'
      >
        <i className='bi bi-film'></i> 
        <p>{totalResultsMovie} Resultados</p>
      </Button>
      <Button
        className={styles.button_content}
        onClick={showHiddenContent}
        id='tv'
      >
        <i className="bi bi-tv"></i>
        <p>{totalResultsTv} Resultados</p>        
      </Button>
      </div>
      <div
        style={{ flexDirection: windowSize.width <= 991 ? 'column' : 'row' }}
        className={styles.container_content}>
        <Content
          arrayContent={searchResultsMovie}
          onScroll={handleScroll}
          title='Peliculas'
          showContent={showMovie}
        />
        <Content
          arrayContent={searchResultsTv}
          onScroll={handleScroll}
          title='Programas de TV'
          showContent={showTv}
        />
      </div>

    </div>
  )
}
