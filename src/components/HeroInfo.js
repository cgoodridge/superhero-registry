import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { BiTrash } from 'react-icons/bi';
import Typography from '@material-ui/core/Typography';


const HeroInfo = ({ hero, onDeleteHero }) => {
    return (
        <Grid item xs={12} m={6} sm={3} className="mb-3 mt-3 ml-3 mr-3">
            <button type="button" onClick={ () => onDeleteHero(hero.id)}
             className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BiTrash />
            </button>
            <Card className="card small">
                <CardMedia
                component="img"
                height="450"
                image=""
                title="Hunter B-15"
                />
                <Typography variant="h5" component="h2" className="cardText">
                    {hero.name}
                </Typography>
                <div className="textPanel"></div>
            </Card>
          </Grid>
    )
}

export default HeroInfo