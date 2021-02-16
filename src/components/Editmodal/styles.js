import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}))