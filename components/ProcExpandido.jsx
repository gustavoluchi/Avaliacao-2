import { ButtonBase, Grid, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/close';
import axios from "axios";
import BotaoNovoProc from "./Botao";
import ImgPlaceHolder from "./ImgPlaceHolder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '150%',
    paddingLeft: theme.spacing(2),
    margin: '10px 0',
    // padding: '10px 0 16px 10px',
  },
  paper: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(2),
    height: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  square: {
    height: 120,
    width: 120,
//     display: 'table',
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
  primeiraLinha: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  segundaLinha: {
    width: '100%',
    padding: theme.spacing(1),
    // color: theme.palette.secondary.main,
  },
  umTerco: {
    width: '33%',
    padding: theme.spacing(1),
    // color: theme.palette.secondary.main,
  },
  close: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '33%',
    height: 48,
  },
  botoes: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  segundaMetade: {
    padding: theme.spacing(1),
    height: 'inherit',
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
  const { expandir, setExpandir, setDetalhes, detalhes, setNotificacao, setOpenCadastro, setIdCadastro } = props;
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
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.x}>
          <ImgPlaceHolder className={classes.square} />
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
    </div >

  )
}
