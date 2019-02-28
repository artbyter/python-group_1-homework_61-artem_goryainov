import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import Badge from '@material-ui/core/Badge';

import VoteIcon from '@material-ui/icons/HowToVote';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import Pic01 from '../../images/1-01.jpg'
import Pic02 from '../../images/1-02.jpg'
import Pic03 from '../../images/1-03.jpg'
import Pic04 from '../../images/1-04.jpg'
import Pic05 from '../../images/1-05.jpg'
import Pic06 from '../../images/1-06.jpg'
import Pic07 from '../../images/1-07.jpg'
import Pic08 from '../../images/1-08.jpg'
import Pic09 from '../../images/1-09.jpg'
import Simpsons from '../../images/simpsons.png'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Header from '../Header/header'

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },

    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '76.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cardPics = ['', Pic01, Pic02, Pic03, Pic04, Pic05, Pic06, Pic07, Pic08, Pic09]

function Album(props) {
    const {classes} = props;
    const [votes, setVotes] = useState(
        cards.map(card => {return {id:card, value:0,}

    }))

    function handleClick(card) {
        setVotes([
            ...votes,
            {
                id: card,
                value: ++votes[card].value,
            }
        ]);
    }

    return (
        <React.Fragment>
            <CssBaseline/>

            <Header/>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Бамбарбия, как говорится, киргуду
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Если бы Адам вернулся на землю, единственное, что он смог бы узнать, это старые шутки.

                        </Typography>
                        <blockquote>Томас Дьюар</blockquote>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map(card => (

                            <Grid item key={card} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={cardPics[card]}
                                        title={'Шутка намбар ' + card}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {'Шутка намбар ' + card}
                                        </Typography>
                                        <Typography>
                                            При создании шуток ни одна жывотныя не пострадала.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Chip
                                            avatar={<Avatar alt="Natacha" src={Simpsons}/>}
                                            label="Отдай свой голос!"
                                            onClick={() => handleClick(card-1)}
                                            className={classes.chip}
                                            variant="outlined"
                                        />
                                        <Badge className={classes.margin} badgeContent={votes[card-1].value} color="primary">
                                            <VoteIcon/>
                                        </Badge>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </main>

        </React.Fragment>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);