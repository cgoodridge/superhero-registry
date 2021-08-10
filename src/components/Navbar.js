import react from 'react'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Link from '@material-ui/core/Link';

const HideOnScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }


const Navbar = (props) => {
    return (

        <>
            {/* <CssBaseline /> */}
            <HideOnScroll {...props}>
            <AppBar>
                <Toolbar>
                <div class="logo">
                    <img src="images/sword_logo.png" alt="SWORD LOGO" width="60"/>   
                </div>
                <pre>  </pre>
                <nav className="nav-col">
                    <div className="nav-wrapper">
                        <Link href="#!" style={{color: 'white', fontFamily: 'Chakra Petch', fontSize: '22px'}}>S.W.O.R.D. Watchlist</Link>
                        {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                    </div>
                </nav>
                </Toolbar>
            </AppBar>
            </HideOnScroll>
            <Toolbar />    
        </>
    )

}

export default Navbar;