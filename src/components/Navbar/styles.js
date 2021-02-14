import { makeStyles } from '@material-ui/core'

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100%) - ${drawerWidth}px`,
            marginLeft: drawerWidth
        }
    },

    title: {
        flexGrow: 3,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },

    image: {
        marginRight: '10px'
    }
}))