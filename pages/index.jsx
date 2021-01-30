import { Box, Grid, Typography, makeStyles, CircularProgress, Container, useMediaQuery } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pesquisa from '../src/components/PesquisaProc';
import UmProc from '../src/components/UmProc';
import ModalCadastro from '../src/components/Cadastro';
import ClicandoAqui from '../src/components/ClicandoAqui'
import BotaoNovoProc from '../src/components/Botao';
import Notificacao from '../src/components/Notificacao';
import ProcExpandido from '../src/components/ProcExpandido';
// import { createServer } from "miragejs"
// import mock from './mock.json'

const useStyles = makeStyles((theme) => ({
  entorno: {
    minHeight: '100vh',
    maxWidth: '100vw',
    display: 'flex',
    margin: 0,
    flexDirection: "column",
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    },
  },
  busca: {
    height: 49,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxProcessos: {
    margin: 10,
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center'
    },
  },
  telaVazia: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 'auto',
    minHeight: '40vh'
  },
  telaCheia: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: 'space-around',
    alignItems: "flex-start",
    marginTop: 20,
    [theme.breakpoints.up('sm')]: {
      width: '70vw',
    },
  },
  listaProcs: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
  skeleton: {
    width: 642,
    height: 144,
    margin: '10px 10px 10px 198px'
  },
  s: {
    width: '100%',
    height: '33%'
  },
  loading: {
    margin: 'auto'
  },
  ClicandoAqui: {
    flexGrow: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Novo: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

// createServer({
//   routes() {
//     this.get("/processo", () => (mock))
//     this.get()
//   },
// })

export default function Index() {
  const classes = useStyles()
  const mobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const [search, setSearch] = useState('')
  const [listaDeProc, setListaDeProc] = useState([])
  const [loading, setLoading] = useState(false)
  const [openCadastro, setOpenCadastro] = useState(false)
  const [expandir, setExpandir] = useState(false)
  const [telaInicial, setTelaInicial] = useState(false)
  const [notificacao, setNotificacao] = useState({})
  const [detalhes, setDetalhes] = useState({})
  const [idCadastro, setIdCadastro] = useState({})
  const [renderizacaoCondicional, setRenderizacaoCondicional] = useState(true)

  useEffect(() => {
    if (listaDeProc.length === 0 && loading === false) {
      setTelaInicial(true)
    } else {
      setTelaInicial(false)
    }
  }, [listaDeProc, loading])

  // useEffect(() => {
  //   axios.get('/api/hello')
  //     .then(response => console.log(response))
  //     .catch(response => console.log(response))
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [])

  useEffect(() => {
    if (expandir === true && mobile) {
      setRenderizacaoCondicional(false)
    } else {
      setRenderizacaoCondicional(true)
    }
  }, [expandir, mobile])

  function submitSearch(valor) {
    if (valor.length > 2) {
      setLoading(true);
      setTimeout(() => {
        axios.get(
          // '/processo'
          `http://localhost:3002/processo?q=${valor}`
          // '/api/hello'
          )
          .then(response => {
            setListaDeProc(response.data);
            if (response.data.length === 0) {
              setNotificacao({
                open: true,
                caso: 'error',
                texto: 'Não há resultado para sua pesquisa'
              })
            } else {
              setNotificacao({
                open: true,
                caso: 'success',
                texto: `Sua pesquisa retornou ${response.data.length} resultado(s)`
              })
            }
          }).
          catch(error => {
            setNotificacao({
            open: true,
            caso: 'error',
            texto: 'Ocorreu um erro e não foi possível realizar sua pesquisa'
          }) 
          console.log(error)
        })
        .finally(() => {
          setLoading(false);
        })
      }, 1000);
    }
  }

  return (
    <Container className={classes.entorno} >
        <Grid
          container
          className={telaInicial ? classes.telaVazia : classes.telaCheia}>
          <Box
            flexGrow='1'
            className={telaInicial ? '' : classes.busca}
          >
            <Typography
              variant={telaInicial ? 'h1' : 'h2'}
            >Busca de processos</Typography>
          </Box>
          <Box
            flexGrow='1'
            width={'60%'}
            flexDirection='row'
            display='flex'
          >
            <Pesquisa search={search} setSearch={setSearch} submitSearch={submitSearch} />
            {!telaInicial && <Box className={classes.Novo}>
              <BotaoNovoProc texto='novo'
                acao={() => {
                  setOpenCadastro(true)
                  setIdCadastro({})
                }} />
            </Box>}
          </Box>

          {telaInicial && <Box className={classes.ClicandoAqui}>
            <ClicandoAqui setIdCadastro={setIdCadastro}
              open={openCadastro} setOpen={setOpenCadastro} />
          </Box>
          }
        </Grid>
      {!telaInicial &&
        loading === false &&

        <Box className={classes.boxProcessos} >

          {renderizacaoCondicional && <div className={classes.listaProcs}>
            {listaDeProc.map(umProc => <UmProc
              key={umProc.id}
              value={umProc}
              setExpandir={setExpandir} expandir={expandir}
              setDetalhes={setDetalhes} detalhes={detalhes}
            />)}
          </div>}
          {expandir &&
            <ProcExpandido
              // openCadastro={openCadastro} notificao={notificacao}
              setExpandir={setExpandir} expandir={expandir}
              setDetalhes={setDetalhes} detalhes={detalhes}
              listaDeProc={listaDeProc} setListaDeProc={setListaDeProc}
              setNotificacao={setNotificacao}
              setOpenCadastro={setOpenCadastro}
              setIdCadastro={setIdCadastro}
            />}
        </Box>}
      {loading === true &&
        <CircularProgress className={classes.loading} />
      }
      <ModalCadastro open={openCadastro} setOpen={setOpenCadastro}
        setIdCadastro={setIdCadastro} idCadastro={idCadastro}
        // acao={notificacao} listaDeProc={listaDeProc} setListaDeProc={setListaDeProc}
        setAcao={setNotificacao} />
      <Notificacao
        acao={notificacao}
        setAcao={setNotificacao}
      />
    </ Container>
  );
}