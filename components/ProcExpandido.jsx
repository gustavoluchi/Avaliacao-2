import { ButtonBase, Grid, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/close';
import axios from "axios";
import BotaoNovoProc from "./Botao";
import quadrado from './imgPlaceholder';
import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 1000,
    maxHeight: 1000,
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
    margin: '10px 0',
  },
  paper: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(2),
    height: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
  },
  square: {
    height: 120,
    width: 120,
    [theme.breakpoints.down('xs')]: {
      width: 50,
      height: 50,
    },
    display: 'table',

  },
  interessados: {
    marginBottom: 20,
  },
  descricao: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  x: {
    display: 'flex',
    //   flexDirection: 'column',
    width: '100%',

  },
  todasLinhas: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  primeiraLinha: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    // flexWrap: 'wrap',
    // alignItems: 'center',
  },
  segundaLinha: {
    width: '100%',
    padding: theme.spacing(1),
    // color: theme.palette.secondary.main,
  },
  umTerco: {
    flexGrow: 1,
    padding: theme.spacing(1),
    // color: theme.palette.secondary.main,
  },
  close: {
    display: 'flex',
    justifyContent: 'flex-end',
    // width: '30%',
    height: 48,
  },
  botoes: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  segundaMetade: {
    padding: theme.spacing(1),
    // height: 'inherit',
    flexGrow: 1,
  },
  /* 
    CardContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: "center",
    flexDirection: "row",
  },
  */
}));

export default function ProcExpandido(props) {
  const { expandir, setExpandir, setDetalhes, detalhes,
     setNotificacao, setOpenCadastro, setIdCadastro, listaDeProc, setListaDeProc } = props;
  const { id, interessados, descricao, entrada, numero, assunto } = detalhes;
  const classes = useStyles();
  // const [isOpen, setIsOpen] = useState(true);
  const handleExcluir = id => {
    axios.delete(`http://localhost:3002/processo/${id}`)
      .then(() => {
        setExpandir(false)
        setDetalhes({})
        setNotificacao({
          open: true,
          caso: 'success',
          texto: 'seu processo foi removido com sucesso!'
        })
        setListaDeProc(listaDeProc.filter(proc => proc.id !== id))
      }).catch(() => {
        setNotificacao({
          open: true,
          caso: 'error',
          texto: 'um erro ocorreu e seu processo não foi removido'
        })
      }
      )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.x}>
          <div className={classes.square}>
            {/* {<div dangerouslySetInnerHTML={(function(){ return {__html: quadrado} })()} /> }  */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <g>
                <rect fill="#c4c4c4" id="canvas_background" height="50" width="50" y="-1" x="-1" />
              </g>
              <g>
                <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="50" x2="50" y1="0" x1="0" stroke-width="1.5" stroke="#ffffff" fill="none" />
                <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="50" x2="0" y1="-0" x1="50" stroke-width="1.5" stroke="#ffffff" fill="none" />
              </g>
            </svg>
          </div>
          <div className={classes.todasLinhas}>
          <div className={classes.primeiraLinha}>
            <div className={classes.umTerco}>
              Processo
              <Typography color='textPrimary'>
                {numero}
              </Typography>
            </div>
            <div className={classes.umTerco}>
              Data
              <Typography color='textPrimary'>
                {entrada}
              </Typography>
            </div>
            <div className={classes.close}>
              <IconButton
                onClick={() => setExpandir(false)}
                // color="primary"
                aria-label="fechar detalhes do processo">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.segundaLinha}>
            Assunto
              <Typography color='textPrimary'>
              {assunto}
            </Typography>
          </div>
        </div>
        </div>

      <div className={classes.segundaMetade}>
        <div className={classes.interessados}>
          Interessados
            {interessados.map(interessado => {
          return <Typography color='textPrimary' key={interessado}>{interessado}</Typography>
        })}
        </div>
        <div className={classes.descricao}>
          Descrição
            <Typography color='textPrimary'>
            {descricao}
          </Typography>
        </div>
      </div>
      <div className={classes.botoes}>
        <BotaoNovoProc texto='remover' acao={() => handleExcluir(id)} />
        <BotaoNovoProc texto='editar' acao={() => {
          setOpenCadastro(true)
          const proc = detalhes;
          setIdCadastro(proc)
        }} />
      </div>
      </Paper>
    </motion.div>

  )
}
