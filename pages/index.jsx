import { Box, Grid, Typography, Link, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Pesquisa from '../components/PesquisaProc';
import UmProc from '../components/UmProc';

const useStyles = makeStyles({
  boxProcessos: {
    marginLeft: 198,
  },
  telaVazia: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: '100vh',
  },
  telaCheia: {
    flexDirection: "row",
    justify: "left",
    alignItems: "left",
  }

})

export default function Index() {
  const [search, setSearch] = useState('');
  const [listaDeProc, setListaDeProc] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/processo').then(response => {
      console.log(response);
      setListaDeProc(response.data)
    })
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const classes = useStyles();
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

  return (
    <>
      <Grid
        container
        component={motion.div}
        transition={{ duration: 1 }}
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
          <Pesquisa search={search} setSearch={setSearch} />
        </Box>
        {!!search && <Button
          style={{
            height: 49,
            margin: '40px 0 0 20px'
          }}
          variant="contained"
          color="secondary"
        > NOVO </Button>}
        {!search && <Typography>
          Você pode criar um novo processo&nbsp;
        <Link
            variant='body2'
            href="/PageCriaProcesso">
            clicando aqui.
        </Link>
        </Typography>}
        {
          search.length > 2 &&
          <Box className={classes.boxProcessos} >
            {listaDeProc.filter(val => teste(val)).map((val, key) => <UmProc
              val={val} 
              key={key}
              />)}
          </Box>
        }
      </Grid>
    </>
  );
}
/* .filter(val => teste(val)) */