import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { Box, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Lista from './ListadeInteressados';
import Notificacao from './Notificacao';
import axios from 'axios'

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
    const { open, setOpen, setListaDeProc, listaDeProc, notificacao, setNotificacao } = props;
    const [assunto, setAssunto] = useState('');
    const [interessados, setInteressados] = useState([]);
    const [interessado, setInteressado] = useState('');
    const [descricao, setDescricao] = useState('');

    function post() {
        
        axios.post('http://localhost:3002/processo',
            {
                "descricao": descricao,
                "assunto": assunto,
                "interessados": interessados
            }
        )
            .then(() => setNotificacao(true))
            .catch(function (error) {
                console.log(error);
            })
    }

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
                        <form>
                            <TextField
                                className={classes.field}
                                autoFocus
                                required
                                onChange={e => setAssunto(e.target.value)}
                                aria-required="Preencha o assunto"
                                margin="dense"
                                id="ass"
                                label="Assunto"
                            >
                                {assunto}</ TextField>
                            <Lista setInteressados={setInteressados}
                                interessados={interessados} />
                            <Box
                                className={classes.boxAdicionar}
                            >
                                <TextField
                                    className={classes.field}
                                    margin="dense"
                                    id="int"
                                    label="Novo Interessado"
                                    onChange={e => setInteressado(e.target.value)}
                                />
                                <Button
                                    onClick={() => setInteressados(oldArray => [...oldArray, interessado])}
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
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </form>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        post();
                        handleClose();
                    }}
                        variant='contained'
                        color="primary">
                        Salvar
          </Button>
                </DialogActions >
            </Dialog>
        </>
    );
}