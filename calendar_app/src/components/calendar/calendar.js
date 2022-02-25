import { Button, FormControl, FormControlLabel, Grid, Modal, Paper, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteDayEvents, deleteEvent } from '../../redux/actions/todosActions';
import { Item } from './dayBox/item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { ADD_EVENT, CALENDAR } from '../../constants/text';


/**
 * Modal Styles
 */
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

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
        '&::-webkit-scrollbar': {
            width: 0,
            background: 'transparent'
        }
    },
    container: {
        // paddingTop:'1rem',
        height: '100%',
        width: '100%'
    },
    item: {
        height: '20px',
        width: '100%'
    },
    title: {
        fontSize: '40px',
        color: theme.palette.primary.main
    },
    days: {
        display: 'flex',
        justifyContent: 'center'
    },
    buttonEvent: {
        // display: 'none',
        height: '100%',
        width: '100%'
    },
    modalDiv: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    defaultButton: {
		backgroundColor: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
		color: theme.palette.contrast.white
	},
    modalButtons:{
        display:'flex',
        justifyContent:'space-between',
        paddingTop:'3rem'
    },
    defaultText: {
        fontSize: '20px',
        color: theme.palette.primary.main
    },
    invisibleButton: {
        cursor: 'pointer',
        border: 'none',
        background: theme.palette.contrast.white,
        color: theme.palette.contrast.background,
        fontSize: '0.75rem',
        '&:focus': {
        outline: 'none',
        background: theme.palette.contrast.background,
        },
    },
    azul: {
        color: theme.palette.primary.main
    },
    verde: {
        color: theme.palette.events.success
    },
    rojo: {
        color: theme.palette.events.error
    },
    amarillo: {
        color: theme.palette.events.warning
    },
    azulBox: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.contrast.white
    },
    verdeBox: {
        backgroundColor: theme.palette.events.success,
        color: theme.palette.contrast.white
    },
    rojoBox: {
        backgroundColor: theme.palette.events.important,
        color: theme.palette.contrast.white
    },
    amarilloBox: {
        backgroundColor: theme.palette.events.warning,
        color: theme.palette.contrast.white
    }
  }));

/**
 * Calendar Hook
 * @param
 * @return
 */
export const Calendar = () => {
    /* HOOKS */
    const classes = useStyles();

    /* REDUX */
    const dispatch = useDispatch();
    const eventsInMonth = useSelector((state) => state.todos.eventsInMonth);

    /* STATES */
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
	const [text1, setText1] = useState('')
	const [text2, setText2] = useState('')
	const [text3, setText3] = useState('')
	const [text4, setText4] = useState('')
	const [selectedEvent, setSelectedEvent] = useState(null)
	const [color, setColor] = useState(null)


    /* CONSTANTS */
    // col sizes
    const weekDaySize = Array(5).fill(2);
    const weekendDaySize = Array(2).fill(1)
    const colSizes = weekDaySize.concat(weekendDaySize); // [2,2,2,2,2,1,1]
    // titles
    const titles = ['M', 'T', 'W', 'Th', 'F', 'Sat', 'Sun']
    // calendar
    const numWeeksInMonth = 5
    const numDaysInWeek = 7

    /* HANDLES */
    const handleOpen = (idx) => {
        // selected event
        setSelectedEvent(idx);
        // open modal
        setOpen(true);
    };
    const handleClose = () => {
        setText1('');
        setText2('');
        setText3('');
        setText4('');
        setSelectedEvent(null);
        setOpen(false);
    };
    const handleForm = (e) => {
        e.preventDefault();
        const day = e.target.day.value;
        const time = e.target.time.value;
        const event = e.target.event.value;
        const idx = selectedEvent;
        const city = e.target.city.value;
        console.log(';');
        console.log(selectedEvent);
        dispatch(addEvent({
            day, time, event, idx, color, city
        }));
        // close
        handleClose();
    };    
    const handleDelete = () => {
        const day = text1;
        const idx = selectedEvent;
        dispatch(deleteEvent({
            day, idx
        }));
        handleClose()
    };
    const handleDeleteDay = (currentDay) => {
        dispatch(deleteDayEvents({
            day:currentDay
        }));
    };
    const handleColor = event => {
        const selected = event.target.value;
        setColor(selected);
    };

    /* MODAL BODY */
    const body = (
        <div style={modalStyle} className={classes.modalDiv}>
            {/* form */}
			<form onSubmit={handleForm}>
                <h1>{'EVENT'}</h1>
                <div>
                    {/* Day */}
                    <p>{'Day'}</p>
                    <TextField name='day'
                        // className={classes.defaultTextbox}
                        multiline={true}
                        // minRows={1}
                        value={text1}
                        onChange={e => setText1(e.target.value - 1)}/>
                    {/* Time */}
                    <p>{'Time'}</p>
                    <TextField name='time'
                        // className={classes.defaultTextbox}
                        multiline={true}
                        // minRows={2}
                        value={text2}
                        onChange={e => setText2(e.target.value)}/>
                    {/* Event */}
                    <p>{'Event'}</p>
                    <TextField name='event'
                        // className={classes.defaultTextbox}
                        multiline={true}
                        // minRows={2}
                        value={text3}
                        onChange={e => setText3(e.target.value)}
                    />                    
                    {/* City */}
                    <p>{'City'}</p>
                    <TextField name='city'
                        // className={classes.defaultTextbox}
                        multiline={true}
                        // minRows={2}
                        value={text4}
                        onChange={e => setText4(e.target.value)}
                    />
                    {/* Colors */}
                    <p>{'Colors'}</p>
                    <RadioGroup
                    row
                    aria-label="colors"
                    name="colors"
                    value={color}
                    onChange={handleColor}
                    >
                    <FormControlLabel
                        classes={{ label: classes.radioMetodoPago }}
                        value="Azul"
                        control={<Radio color="secondary" className={classes.azul} />}
                        label="Azul"
                    />
                    <FormControlLabel
                        classes={{ label: classes.radioMetodoPago }}
                        value="Verde"
                        control={<Radio className={classes.verde} />}
                        label="Verde"
                    />
                    <FormControlLabel
                        classes={{ label: classes.radioMetodoPago }}
                        value="Rojo"
                        control={<Radio className={classes.rojo} />}
                        label="Rojo"
                    />
                    <FormControlLabel
                        classes={{ label: classes.radioMetodoPago }}
                        value="Amarillo"
                        control={<Radio className={classes.amarillo} />}
                        label="Amarillo"
                    />
                    </RadioGroup>
                </div>
                <div className={classes.modalButtons}>
                    <Button name='delete'
                        onClick={handleDelete}
                        variant="contained"
                        color="secondary"
                    >
                            {'Delete'}
                    </Button>
                    <Button name='add'                        
                        type='submit'
                        variant="contained"
                        color="primary"
                    >
                            {'Add'}
                    </Button>
                </div>
			</form>
        </div>
    );


    // view
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <Grid container>
                <Grid item xs={10} sm={10} className={classes.root}>
                    <p className={classes.title}>{CALENDAR}</p>
                </Grid>
                <Grid item xs={2} sm={2} className={classes.root}>
                <Button
                    type="button"
                    onClick={() => handleOpen()}
                    variant="contained"
                    color="primary"
                >
                    {ADD_EVENT}
                </Button>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.root}>
                    <Grid container spacing={1} className={classes.container}>
                        {/*Grid Titles */}
                        <>
                            {
                                titles.map( (title,i) =>{
                                    console.log(title);
                                    return(
                                        <Grid item xs={colSizes[i]} sm={colSizes[i]} className={classes.days}>
                                            <p>{title}</p>
                                        </Grid>
                                    );
                                })
                            }
                        </>
                        {/* rows */}
                        {
                            eventsInMonth.map( (day, i) => {
                                return(
                                    <Grid item xs={colSizes[i%numDaysInWeek]} sm={colSizes[i%numDaysInWeek]}>
                                        <Paper>
                                            <Grid container spacing={1}>
                                                <Grid
                                                    item
                                                    xs={2} sm={2}
                                                >                                                       
                                                    <p style={{marginLeft:'0.33rem'}}>{(i+1)}</p>
                                                    <button
                                                        type="button"
                                                        onClick={()=>{
                                                            handleDeleteDay(i);
                                                        }}
                                                        className={classes.invisibleButton}
                                                    >
                                                        <FontAwesomeIcon icon={faRefresh}/>
                                                    </button>
                                                </Grid>
                                                <Grid item xs={10} sm={10} className={classes.paper}>                                                       
                                                    <Grid container spacing={1}>
                                                        {day.map((currentEvent, idx) => {
                                                            if (currentEvent){
                                                                return(
                                                                    <Grid item xs={12} sm={12}>
                                                                        <Paper className={classes.item}>
                                                                            {console.log('currentEvent')}
                                                                            {console.log(currentEvent)}
                                                                            <button
                                                                                type="button"
                                                                                onClick= {() => {
                                                                                    setText1(currentEvent.day);
                                                                                    setText2(currentEvent.time);
                                                                                    setText3(currentEvent.event);
                                                                                    setText4(currentEvent.city);
                                                                                    setColor(currentEvent.color);
                                                                                    handleOpen(idx);                                                                                
                                                                                }}
                                                                                className={`${classes.buttonEvent} ${
                                                                                    currentEvent.color==="Azul" ? classes.azulBox :
                                                                                    currentEvent.color==="Verde" ? classes.verdeBox :
                                                                                    currentEvent.color==="Rojo" ? classes.rojoBox :
                                                                                    classes.amarilloBox
                                                                                }`}
                                                                            >
                                                                                {
                                                                                `
                                                                                ${currentEvent.time ? currentEvent.time : ''}
                                                                                -${currentEvent.event ? currentEvent.event : ''}
                                                                                `
                                                                                }
                                                                            </button>
                                                                        </Paper>
                                                                        
                                                                    </Grid>
                                                                )
                                                            }
                                                        })}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            
                                        </Paper>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
            
        </div>        
    )    
}