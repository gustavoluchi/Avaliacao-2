import { Box, Grid, Typography, Button, makeStyles, CircularProgress, Container } from '@material-ui/core';
import axios from 'axios';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Pesquisa from '../components/PesquisaProc';
import UmProc from '../components/UmProc';
import ModalCadastro from '../components/ModalCadastro';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Skeleton } from '@material-ui/lab';
import ClicandoAqui from '../components/ClicandoAqui'
import BotaoNovoProc from '../components/BotaoNovoProc';
// import BotaoNovo from '../components/BotaoNovo'

const useStyles = makeStyles({
  boxProcessos: {
    margin: 10,
  },
  telaVazia: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin: 'auto'

  },
  telaCheia: {
    display: 'flex',
    flexDirection: "row",
    justify: "left",
    alignItems: "left",
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
  entorno: {
    height: '100vh',
    display: 'flex',
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "left",
    // alignContent: "center",
  }
})

export default function Index() {
  const [search, setSearch] = useState('');
  const [listaDeProc, setListaDeProc] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCadastro, setOpenCadastro] = useState(false);
  const [openProcesso, setIsOpenProcesso] = useState(false);

  const classes = useStyles();
  const router = useRouter();
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  function submitSearch(valor) {
    if (valor.length > 2) {
      setLoading(true);
      setTimeout(() => {
        axios.get(`http://localhost:3002/processo?q=${valor}`)
          .then(response => {
            setListaDeProc(response.data);
            setLoading(false);
          })
          .finally(() => {

          })
      }, 1000);
    }
  }

  

  return (
    <Container className={classes.entorno} >
      <Grid
        container
        className={!search ? classes.telaVazia : classes.telaCheia}>
        <Box
          style={!search ? {} : {
            margin: 40,
            width: 118,
            height: 49
          }}>
          <Typography
            variant={!search ? 'h1' : 'h2'}
          >Busca de processos</Typography>
        </Box>
        <Box marginTop={5}
          marginBottom={9}
          width={!search ? '75%' : '40%'}
        >
          <Pesquisa search={search} setSearch={setSearch} submitSearch={submitSearch} />
        </Box>
        {!!search && <BotaoNovoProc open={openCadastro} setOpen={setOpenCadastro} />}
        {!search && <ClicandoAqui open={openCadastro} setOpen={setOpenCadastro} />}
      </Grid>
      {search.length > 2 &&
        loading === false &&
        <Box className={classes.boxProcessos} >
          {listaDeProc.map(val => <UmProc
            val={val}
          />)}
        </Box>}
      {search.length > 2 && loading === true &&
        <CircularProgress className={classes.loading} />
      }
      <ModalCadastro open={openCadastro} setOpen={setOpenCadastro} listaDeProc={listaDeProc} setListaDeProc={setListaDeProc} />
    </ Container>
  );
}
/* 
lixo:
<Box component={Link} href='/about'>oii</Box>
  const teste = (val) => {
    if (search == "") {
      return val
    } else if (
      val.id.includes(search) ||
      val.numero.includes(search) ||
      val.entrada.includes(search) ||
      val.descricao.includes(search) ||
      val.assunto.includes(search) ||
      val.interessados.includes(search)) {
      return val
    }
  }

*/