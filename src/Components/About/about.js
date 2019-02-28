import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/header'
import Map from '../../images/map.jpg'
import {withStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {};

function About(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Header/>
            <main className={classes.layout}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Мы везде!
                        </Typography>

                    </CardContent>
                    <CardMedia
                        component="img"
                        image={Map}

                    />

                </CardActionArea>

            </Card>
            </main>
        </React.Fragment>)
}

export default withStyles(styles)(About);