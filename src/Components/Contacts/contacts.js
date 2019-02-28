import React from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Liza from '../../images/Lisa.png'
import Bart from '../../images/Bart.jpg'
import Homer from '../../images/Homer.png'

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';

import Typography from '@material-ui/core/Typography';
import Header from '../Header/header'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
    },


    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },

});



const names =[
    {
        title:'Liza',
        image:Liza,
        description:"Руки",
        buttonText: 'Голосуй',
        buttonVariant: 'outlined',
    },
     {
        title:'Bart',
        image:Bart,
        description:"Моск",
         buttonText: 'Голосуй',
        buttonVariant: 'outlined',
    },
    {
        title:'Homer',
        image:Homer,
        description:"???",
        buttonText: 'Голосуй',
        buttonVariant: 'outlined',
    },
]

function Contacts(props) {
    const {classes} = props;

    return (
        <React.Fragment>
            <CssBaseline/>
            <Header/>
            <main className={classes.layout}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Гении разработки
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" component="p">
                        Слышал шутку про Git от нескольких человек, и у каждого была своя версия.
                    </Typography>
                </div>
                {/* End hero unit */}
                <Grid container spacing={40} alignItems="flex-end">
                    {names.map(name => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={name.title} xs={12} sm={name.title === 'Homer' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={name.title}

                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={name.title === 'Bart' ? <StarIcon/> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <CardMedia

                                        className={classes.cardMedia}
                                        image={name.image}
                                    />
                                    <h4>{name.description}</h4>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button fullWidth variant={name.buttonVariant} color="primary">
                                        {name.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </main>

        </React.Fragment>
    );
}

Contacts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contacts);