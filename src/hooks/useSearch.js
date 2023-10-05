import { useEffect, useState } from "react"
import { searchAllPages } from "../services/searchAllPages";

export const useSearch = () => {

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResultsMovie, setSearchResultsMovie] = useState([]);
  const [searchResultsTv, setSearchResultsTv] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showMovie, setShowMovie] = useState(false);
  const [showTv, setShowTv] = useState(false);
  const [totalResultsMovie, setTotalResultsMovie] = useState('-');
  const [totalResultsTv, setTotalResultsTv] = useState('-');

  const showHiddenMovie = () => {
    setShowMovie(!showMovie)
  }

  const showHiddenTv = () => {
    setShowTv(!showTv)
  }

  const handleSearchChange = async ({ target: { value } }) => {
    setSearch(value)
    setSearchResultsMovie([]);
    setSearchResultsTv([]);
    setTotalResultsMovie('-');
    setTotalResultsTv('-')
  }

  const getNewResults = async () => {
    let movie = 'movie';
    let tv = 'tv'
    if (!hasMore) return;
    setLoading(true);
    try {
      const allResultsMovie = await searchAllPages(search, pageNum, movie);
      const allResultsTv = await searchAllPages(search, pageNum, tv);
      if (allResultsMovie.length === 0 || allResultsTv.length === 0) {
        setHasMore(false)
      } else {
        setSearchResultsMovie([...searchResultsMovie, ...allResultsMovie.results]);
        setSearchResultsTv([...searchResultsTv, ...allResultsTv.results]);
        setPageNum(pageNum + 1)
        setTotalResultsMovie(allResultsMovie.total_results)
        setTotalResultsTv(allResultsTv.total_results)
      }
    } catch (error) {
      console.log('Error fetching data: ', error)
    }
    setLoading(false);
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    getNewResults();
  }

  const handleSearchSubmit = () => {
    setSearchResultsMovie([]);
    setSearchResultsTv([]);
    setPageNum(1);
    setHasMore(true);
    getNewResults();
  }

  useEffect(() => {
    // getNewResults();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [search, pageNum])

  return {
    handleSearchChange,
    search,
    searchResultsMovie,
    searchResultsTv,
    getNewResults,
    loading,
    handleSearchSubmit,
    hasMore,
    showMovie,
    showTv,
    showHiddenMovie,
    showHiddenTv,
    totalResultsMovie,
    totalResultsTv
  }
}
