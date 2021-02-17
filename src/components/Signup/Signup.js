import React, { useState } from 'react'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Signup = () => {
    const classes = useStyles()

    const [isSignUp, setIsSignUp] = useState(true)

    const [formData, setFormData] = useState(initialState)

    const [showPassword, setshowPassword] = useState(false)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleShowPassword = () => setshowPassword((prevshowPassword) => !prevshowPassword)

    const switchMode = () => setIsSignUp((previsSignUp) => !previsSignUp)

    console.log(formData)

    const ifSignUp = (
        <>
            <Grid item xs={12}>
                <TextField name="firstName" label="First Name" variant="outlined" required fullWidth autoFocus onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
                <TextField name="lastName" label="Last Name" variant="outlined" required fullWidth onChange={handleChange} />
            </Grid>
        </>
    )



    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {isSignUp ? 'Sign Up' : 'Sign in'}
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        {isSignUp ? ifSignUp : null}
                        <Grid item xs={12}>
                            <TextField name="email" label="Email address" type="email" variant="outlined" required fullWidth onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="password" label="Password" type={!showPassword ? "password" : "text"} variant="outlined" required fullWidth onChange={handleChange} InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword}>
                                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} />
                        </Grid>
                        {isSignUp ? (
                            <>
                                <Grid item xs={12}>
                                    <TextField name="confirmPassword" label="Confirm Password" type={!showPassword ? "password" : "text"} variant="outlined" required fullWidth onChange={handleChange} onChange={handleChange} InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleShowPassword}>
                                                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }} />
                                </Grid>
                            </>
                        ) : null}
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign in'}
                        </Button>
                        <Grid container justify="center">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>


        </Container>
    )
}

export default Signup
