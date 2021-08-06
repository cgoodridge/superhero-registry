import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const HeroInfo = ({hero}) => {
    return (
        <Grid item xs={12} m={6} sm={3} className="mb-3 mt-3 ml-3 mr-3">
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