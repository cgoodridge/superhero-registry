import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { BiTrash } from 'react-icons/bi';


const HeroInfo = ({ hero, onDeleteHero }) => {
    return (
        <Grid item xs={12} m={6} sm={3}>
            
            <Card className="card small">
            

                <CardMedia
                component="img"
                height="500"
                image={hero.imgURL}
                title="Hunter B-15"
                />

                <div className="cardText"></div>

                <div className="textPanel"> 
                    <h2>{hero.name}/{hero.alias}</h2>
                </div>
                
            </Card>
            {/* <button type="button" onClick={ () => onDeleteHero(hero.id)}
             className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BiTrash />
            </button> */}
          </Grid>
    )
}

export default HeroInfo