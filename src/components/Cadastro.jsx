import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useEffect, useState } from 'react';
import { Box, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import Lista from './ListadeInteressados';
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    width: '40%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  boxAdicionar: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
    },

  },
  adicionar: {
    margin: '5px 5px 5px 15px',
  },
  titulo: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
}))

export default function Cadastro(props) {
  const { open, setOpen, setAcao, setIdCadastro, idCadastro } = props;
  const { id, interessados, descricao, entrada, numero, assunto } = idCadastro;
  const [interessadosCadastro, setInteressadosCadastro] = useState([]);
  const [assuntoCadastro, setAssuntoCadastro] = useState('');
  const [interessadoCadastro, setInteressadoCadastro] = useState('');
  const [descricaoCadastro, setDescricaoCadastro] = useState('');
  const [assuntoErro, setAssuntoErro] = useState(false);
  const [interessadoErro, setInteressadoErro] = useState(false);
  const [descricaoErro, setDescricaoErro] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    setAssuntoCadastro(assunto ?? '')
    setInteressadosCadastro(interessados ?? [])
    setDescricaoCadastro(descricao ?? '')
  }, [idCadastro])

  function fechar() {
    setAssuntoErro(false)
    setInteressadoErro(false)
    setDescricaoErro(false)
    setOpen(false)
  }

  function finalizar() {
    if (JSON.stringify(idCadastro) !== '{}') {
      setAcao({
        open: true,
        caso: 'error',
        texto: 'o sistema ainda não está configurado para receber uma edição'
      })
      setOpen(false)
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
          fechar()
        })
        .catch(function (error) {
          setAcao({
            open: true,
            caso: 'error',
            texto: 'um erro ocorreu e seu processo não foi salvo'
          })
          console.log(error);
        })
      // .finally(() => {

      // })
    }
  }


  return (
    <>
      <Dialog open={open} onClose={fechar} aria-labelledby="form-title"
        fullWidth
        maxWidth='md'
      >
        <div className={classes.titulo}>
        <DialogTitle id="form-title">
          Cadastro de processo
          
        </DialogTitle>
        <IconButton aria-label="close" onClick={fechar}>
            <CloseIcon />
          </IconButton>
          </div>
        <DialogContent>
          <Grid className={classes.grid}>
            <TextField
              className={classes.field}
              required
              autoFocus
              onChange={e => setAssuntoCadastro(e.target.value)}
              onBlur={() => setAssuntoErro(true)}
              helperText={(assuntoCadastro == "" && assuntoErro) ? "Campo obrigatório" : ''}
              error={(assuntoCadastro == "" && assuntoErro) ? true : false}
              value={assuntoCadastro}
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
                required
                margin="dense"
                id="int"
                label="Novo Interessado"
                onBlur={() => setInteressadoErro(true)}
                helperText={(interessadoCadastro == "" && interessadoErro && interessadosCadastro.length === 0) ? "Campo obrigatório" : ''}
                error={(interessadoCadastro == "" && interessadoErro && interessadosCadastro.length === 0) ? true : false}
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
              required
              margin="dense"
              id="des"
              label="Descrição"
              value={descricaoCadastro}
              onBlur={() => setDescricaoErro(true)}
              helperText={(descricaoCadastro == "" && descricaoErro) ? "Campo obrigatório" : ''}
              error={(descricaoCadastro == "" && descricaoErro) ? true : false}
              multiline
              rows={4}
              onChange={e => setDescricaoCadastro(e.target.value)}
            />

          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={finalizar}

            variant='contained'
            color="primary">
            Salvar
          </Button>
        </DialogActions >
      </Dialog>
    </>
  );
}