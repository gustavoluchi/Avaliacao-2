import { Box, Grid, Typography, makeStyles, CircularProgress, Container } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import Pesquisa from '../components/PesquisaProc';
import UmProc from '../components/UmProc';
import ModalCadastro from '../components/Cadastro';
import ClicandoAqui from '../components/ClicandoAqui'
import BotaoNovoProc from '../components/Botao';
import Notificacao from '../components/Notificacao';
import ProcExpandido from '../components/ProcExpandido';
// import BotaoNovo from '../components/BotaoNovo'
const useStyles = makeStyles({
  entorno: {
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    margin: 0,
    padding: '1.5rem',
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
  busca: {
    // margin: 'max(0, 40px)',
    height: 49,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxProcessos: {
    margin: 10,
    display: 'flex',
    flexGrow: 1
  },
  telaVazia: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
//     alignContent: "center",
    margin: 'auto',
    minHeight: '30vh'
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
    // minHeight: '30vh',
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

})

export default function Index() {
  const [search, setSearch] = useState('')
  const [listaDeProc, setListaDeProc] = useState([])
  const [loading, setLoading] = useState(false)
  const [openCadastro, setOpenCadastro] = useState(false)
  const [expandir, setExpandir] = useState(false)
  const [notificacao, setNotificacao] = useState({})
  const [detalhes, setDetalhes] = useState({})
  const [idCadastro, setIdCadastro] = useState({})

  const classes = useStyles()

  function submitSearch(valor) {
    if (valor.length > 2) {
      setLoading(true);
      setTimeout(() => {
        axios.get(`http://localhost:3002/processo?q=${valor}`)
          .then(response => {
            setListaDeProc(response.data);
            setLoading(false);
          })
        /* .finally(() => {
          
        })*/
      }, 1000);
    }
  }

  return (
    <Container className={classes.entorno} >
      <Grid
        container
        className={!search ? classes.telaVazia : classes.telaCheia}>

        <Box
          flexGrow='1'
          className={!search ? '' : classes.busca}
        >
          <Typography
            variant={!search ? 'h1' : 'h2'}
          >Busca de processos</Typography>
        </Box>
        <Box
          flexGrow='1'
          width={!search ? '75%' : '50%'}
        >
          <Pesquisa search={search} setSearch={setSearch} submitSearch={submitSearch} />
        </Box>
        {!!search && <Box className={classes.Novo}>
          <BotaoNovoProc texto='novo'
            acao={() => {
              setOpenCadastro(true)
              setIdCadastro({})
            }} />
        </Box>}
        {!search && <Box className={classes.ClicandoAqui}>
          <ClicandoAqui setIdCadastro={setIdCadastro}
            open={openCadastro} setOpen={setOpenCadastro} />
        </Box>
        }
      </Grid>
      {search.length > 2 &&
        loading === false &&
        <Box className={classes.boxProcessos} >
          <div style={{ width: '100%' }}>
            {listaDeProc.map(umProc => <UmProc
              key={umProc.id}
              value={umProc}
              setExpandir={setExpandir} expandir={expandir}
              setDetalhes={setDetalhes} detalhes={detalhes}
            />)}
          </div>
          {expandir && <ProcExpandido
            // openCadastro={openCadastro} notificao={notificacao}
            setExpandir={setExpandir} expandir={expandir}
            setDetalhes={setDetalhes} detalhes={detalhes}
            setNotificacao={setNotificacao}
            setOpenCadastro={setOpenCadastro}
            setIdCadastro={setIdCadastro}
          />}
        </Box>}
      {search.length > 2 && loading === true &&
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