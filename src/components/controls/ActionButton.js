import { Button, makeStyles } from '@mui/material'

/* const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
        '& .MuiButton-label': {
            color: theme.palette.grey[500],
        }
    },
    primary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.main,
        }
    }

})); */

const ActionButton = (props) => {
    const { color, children, onClick } = props;
    //const classes = useStyles();
    return (
        <Button
            onClick={onClick}>
            {children}
        </Button>
    )
}

export default ActionButton
