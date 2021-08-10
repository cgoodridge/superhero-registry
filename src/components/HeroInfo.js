import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { BiTrash } from 'react-icons/bi';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: "70%",
      border: "none",
      boxShadow: theme.shadows[5],
      maxHeight: "600px",
      overflowX: "hidden",
      padding: theme.spacing(2, 4, 3),
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      color: 'white'
    },

    heading: {
        fontFamily: "Chakra Petch"
    }
  }));
  

const HeroInfo = ({ hero, onDeleteHero }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div  className={classes.paper}>
            <Container className="threatInfo">
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h4" className={classes.heading}>
                            {hero.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            Threat Level: {hero.threatLevel}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <img src={hero.imgURL} width="150"></img>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            Abilities: {hero.abilities}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="body1" gutterBottom>
                           {hero.notes}
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
      );

    return (
        <>
            <Grid item xs={12} m={6} sm={3}>
                
                <Card className="card small" onClick={handleOpen}>
                

                    <CardMedia
                    component="img"
                    height="500"
                    image={hero.imgURL}
                    title="Hunter B-15"
                    />

                    <div className="cardText"></div>

                    <div className="textPanel" > 
                        <h2>{hero.name}</h2>
                    </div>
                    
                </Card>
                {/* <button type="button" onClick={ () => onDeleteHero(hero.id)}
                className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <BiTrash />
                </button> */}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    )
}

export default HeroInfo