import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Search from "./components/Search";
import AddHero from "./components/AddHero";
import Grid from '@material-ui/core/Grid';
import HeroInfo from "./components/HeroInfo";

const App = () => {
  let [heroList, setHeroList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("name");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredHeroes = heroList.filter(
    item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.alias.toLowerCase().includes(query.toLowerCase()) || 
        item.notes.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setHeroList(data)
    });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">S.W.O.R.D. Threat Monitoring</h1>
      <AddHero 
        onSendHero={myHero => setHeroList([...heroList, myHero])}
        lastId={heroList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}/>
      <Search 
        query={query} 
        onQueryChange={myQuery => setQuery(myQuery)} 
        orderBy={orderBy} 
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}/>

      <Grid container>
        {filteredHeroes.map((hero, key) => (
          <HeroInfo key={hero.id} hero={hero} 
          onDeleteHero={ heroId => setHeroList(heroList.filter(hero => hero.id !== heroId))}/>
        ))} 
      </Grid>
    </div>
  );
}

export default App;
