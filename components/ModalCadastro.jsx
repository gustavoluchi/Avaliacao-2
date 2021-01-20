import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { Box, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Lista from './Lista';

const useStyles = makeStyles({
    grid: {
        display: 'flex',
        flexDirection: 'column'
    },
    field: {
        width: '40%'
    },
    boxAdicionar: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    adicionar: {
        margin: '5px 5px 5px 15px',
    }
})

export default function FormDialog(props) {
    const { open, setOpen, setListaDeProc, listaDeProc } = props;
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                fullWidth
                maxWidth='md'
            >
                <DialogTitle id="form-dialog-title">Cadastro de processo</DialogTitle>
                <DialogContent>
                    <Grid className={classes.grid}>
                        <TextField
                            className={classes.field}
                            autoFocus
                            margin="dense"
                            id="ass"
                            label="Assunto"
                        />
                        <Lista listaDeProc={listaDeProc} setListaDeProc={setListaDeProc} />
                        <Box
                            className={classes.boxAdicionar}
                        >
                            <TextField
                                className={classes.field}
                                margin="dense"
                                id="int"
                                label="Novo Interessado"
                            />
                            <Button onClick={handleClose}
                                className={classes.adicionar}
                                variant='contained'
                                color="primary">
                                Adicionar
                            </Button>
                        </Box>
                        <TextField
                            fullWidth
                            margin="dense"
                            id="des"
                            label="Descrição"
                            multiline
                            rows={4}
                        />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}
                        variant='contained'
                        color="primary">
                        Salvar
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}