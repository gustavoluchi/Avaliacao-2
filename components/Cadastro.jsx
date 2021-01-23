import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useEffect, useState } from 'react';
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

export default function Cadastro(props) {
  const { open, setOpen, setAcao, setIdCadastro, idCadastro } = props;
  const { id, interessados, descricao, entrada, numero, assunto } = idCadastro;
  const [assuntoCadastro, setAssuntoCadastro] = useState('');
  const [interessadosCadastro, setInteressadosCadastro] = useState([]);
  const [interessadoCadastro, setInteressadoCadastro] = useState('');
  const [descricaoCadastro, setDescricaoCadastro] = useState('');
  const [fieldTouched, setFieldTouched] = useState('')

  useEffect(() => {console.log(typeof assuntoCadastro)},[])

  useEffect(() => {
    setAssuntoCadastro(assunto)
    setInteressadosCadastro(interessados ?? [])
    setDescricaoCadastro(descricao)
  }, [idCadastro])

  function post() {
    if (JSON.stringify(idCadastro) !== '{}') {
      setAcao({
        open: true,
        caso: 'error',
        texto: 'o sistema ainda não está configurado para receber uma edição'
      })
      return
    } else {
      axios.post('http://localhost:3002/processo',
        {
          "descricao": descricaoCadastro,
          "assunto": assuntoCadastro,
          "interessados": interessadosCadastro
        }
      )
        .then(() => {
          setAcao({
            open: true,
            caso: 'success',
            texto: 'seu processo foi salvo com sucesso!'
          })
          setAssuntoCadastro('')
          setInteressadosCadastro([])
          setInteressadoCadastro('')
          setDescricaoCadastro('')
        })
        .catch(function (error) {
          setAcao({
            open: true,
            caso: 'error',
            texto: 'um erro ocorreu e seu processo não foi salvo'
          })
          console.log(error);
        })
    }
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

            <TextField
              className={classes.field}
              autoFocus
              onChange={e => setAssuntoCadastro(e.target.value)}
              // value={assuntoCadastro}
              onFocus={() => setFieldTouched('assunto')}
              error={fieldTouched === 'assunto' && assuntoCadastro === ''}
              helperText={fieldTouched == 'assunto' && assuntoCadastro === '' && 'campo obrigatório'}
              aria-required="Preencha o assunto"
              margin="dense"
              id="ass"
              label="Assunto"
            />
            <Lista setInteressados={setInteressadosCadastro}
              interessados={interessadosCadastro} />
            <Box
              className={classes.boxAdicionar}
            >
              <TextField
                className={classes.field}
                margin="dense"
                id="int"
                label="Novo Interessado"
                error={!(interessadoCadastro === '')}
                onChange={e => setInteressadoCadastro(e.target.value)}
                value={interessadoCadastro}
                onKeyPress={event => {
                  if (event.key == 'Enter') {
                    setInteressadosCadastro(oldArray => [...oldArray, interessadoCadastro])
                    setInteressadoCadastro('')
                  }
                }}
              />
              <Button
                onClick={() => {
                  setInteressadosCadastro(oldArray => [...oldArray, interessadoCadastro])
                  setInteressadoCadastro('')
                }}
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
              value={descricaoCadastro}
              multiline
              rows={4}
              onChange={e => setDescricaoCadastro(e.target.value)}
            />

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