import React from "react";
import {Link, withRouter} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import AboutIcon from '@material-ui/icons/TripOrigin';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',

    },
})
export default withStyles(styles)(function Header(props) {
    const {classes} = props;

    return (

        <AppBar position="static" className={classes.appBar}>

            <Toolbar>

                <Link to='/' className={classes.link}>

                    <HomeIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap style={{paddingRight: 20}}>
                        Вертай взад
                    </Typography>

                </Link>
                <Link to='/contacts' className={classes.link}>
                    <ContactsIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap style={{paddingRight: 20}}>
                        Есть контакт!
                    </Typography>
                </Link>
                <Link to='/about' className={classes.link}>
                    <AboutIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                          нас!
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
})
