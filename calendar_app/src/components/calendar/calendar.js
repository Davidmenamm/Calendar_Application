import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { Item } from './dayBox/item'

/**
 * Styles
 */
 const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        // padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100px',
        flex: 1,
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    container: {
        paddingTop:'1rem',
        height: '600px',
        width: '900px'
    },
    item: {
        height: '20px',
        width: '120px'
    },
  }));

/**
 * Calendar Hook
 * @param
 * @return
 */
export const Calendar = () => {
    // styles
    const classes = useStyles();
    // view
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} className={classes.root}>
                    <h1>Calendar</h1>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.root}>
                    <Grid container spacing={1} className={classes.container}>
                        <>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item className={classes.paper}/> */}
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sm={12}>
                                            <Paper className={classes.item}/>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Paper className={classes.item}/>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Paper className={classes.item}/>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Paper className={classes.item}/>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Paper className={classes.item}/>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>                
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                        </>
                        <>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>                
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                        </>
                        <>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>                
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                        </>
                        <>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>                
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                        </>
                        <>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>                
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                        </>
                        <>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>                
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                        </>
                        <>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>                
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Paper className={classes.paper}>
                                    {/* <Item/> */}
                                </Paper>
                            </Grid>
                        </>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>        
    )    
}