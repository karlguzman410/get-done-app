import React, { useState } from 'react'
import Todolist from '../List/Todolist'
import { Modal, Grid, Typography, Button, Input } from '@material-ui/core'
import useStyles from "./styles";


const Editmodal = ({ updateTodo, editId, modal, setModal, edit, setEdit }) => {
    const classes = useStyles();
    const handleEdit = (event, edit, editId) => {
        event.preventDefault();
        updateTodo(edit, editId);
        setEdit("")
        setModal(false)
    };


    return (
        <Modal open={modal} onClose={() => setModal(false)}>
            <Grid
                container
                spacing={0}
                align="center"
                justify="center"
                direction="column"
                className={classes.paper}
            >
                <Grid item>
                    <Typography>Edit this task</Typography>
                    <form>
                        <Input
                            name="to do"
                            value={edit}
                            onChange={(event) => setEdit(event.target.value)}
                        />
                        <Button
                            disabled={!edit}
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={(event) => handleEdit(event, edit, editId)}
                        >
                            <Typography>
                                Done
                            </Typography>
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default Editmodal
