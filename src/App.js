import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { makeStyles, useTheme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Search from "./components/Search";
import AddHero from "./components/AddHero";
import Grid from '@material-ui/core/Grid';
import HeroInfo from "./components/HeroInfo";
import Navbar from "./components/Navbar";
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#0B0B0B',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#2196f3',
      dark: '#006596',
      contrastText: '#000',
    },
  },
});

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
    <div className="App">
       <ThemeProvider theme={theme} >
          <Container>

            <header>
              <Navbar />
            </header>
          
            <Grid container spacing={8} justifyContent="space-between" alignItems="center" style={{marginTop:"16px"}}>
                <Grid item>
                  <div>

                  </div>

                    {/* <AddHero 
                      onSendHero={myHero => setHeroList([...heroList, myHero])}
                      lastId={heroList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}/> */}
                    
                </Grid>
                <Grid item>
                  <Search 
                    query={query} 
                    onQueryChange={myQuery => setQuery(myQuery)} 
                    orderBy={orderBy} 
                    onOrderByChange={mySort => setOrderBy(mySort)}
                    sortBy={sortBy}
                    onSortByChange={mySort => setSortBy(mySort)}/>
                </Grid>
            </Grid>

            

            <Grid container>
              {filteredHeroes.map((hero, key) => (
                <HeroInfo key={hero.id} hero={hero} 
                onDeleteHero={ heroId => setHeroList(heroList.filter(hero => hero.id !== heroId))}/>
              ))} 
            </Grid>
        </Container>

      </ThemeProvider>
    </div>
  );
}

export default App;
