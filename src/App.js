import './App.css';
import Search from "./components/Search";
import AddHero from "./components/AddHero";
import Grid from '@material-ui/core/Grid';
import heroList from "./data.json";
import HeroInfo from "./components/HeroInfo";

const App = () => {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">Superhero Registry</h1>
      <AddHero />
      <Search />

      <Grid container>
        {heroList.map((hero, key) => (
          <HeroInfo key={hero.id} hero={hero}/>
        ))} 
      </Grid>
    </div>
  );
}

export default App;
