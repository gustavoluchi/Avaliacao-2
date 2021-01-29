import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  deFora: {
    margin: '10px 0 10px 0',
    width: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    // height: 108
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    alignItems: "center",
    flexDirection: "row",

  },
  media: {
    height: 140,
  },
  container: {
    display: 'flex',
  },
  square: {
    height: 50,
    width: 50,
    margin: theme.spacing(1),
  },
  sem: {
    height: '100%'
  },
  interessados: {
    height: 48,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  descricao: {
    width: 240,
    // height: 48,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  flexGrow: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    fontWeight: '600',
  },

}));

export default function UmProc(props) {
  const { id, interessados, descricao, entrada, numero, assunto } = props.value;
  const classes = useStyles();
  const { expandir, setExpandir, setDetalhes, detalhes } = props;
  return (
    // <>
    // {props.val !== undefined &&
    <Card
      key={id}
      className={classes.deFora}
    >
      <CardActionArea
        className={classes.sem}
        onClick={() => {
          if (JSON.stringify(detalhes) === '{}' || detalhes !== props.value)  {
            setDetalhes(props.value)
          }
          if (detalhes === props.value || !expandir) {
            
            if(expandir === false && window.scrollY > 350) {
              window.scroll({
                top: 100, 
                left: 0, 
                behavior: 'smooth'
              });
            }
            setExpandir(!expandir)
          }
        }}
      >
        <CardContent>
          <Grid
            className={classes.CardContent}
            container
            spacing={2}
          >
            <div className={classes.square}>           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <g>
                <rect fill="#c4c4c4" id="canvas_background" height="50" width="50" y="-1" x="-1" />
              </g>
              <g>
                <line strokeLinecap="undefined" strokeLinejoin="undefined" id="svg_2" y2="50" x2="50" y1="0" x1="0" strokeWidth="1.5" stroke="#ffffff" fill="none" />
                <line strokeLinecap="undefined" strokeLinejoin="undefined" id="svg_3" y2="50" x2="0" y1="-0" x1="50" strokeWidth="1.5" stroke="#ffffff" fill="none" />
              </g>
            </svg>
            </div>
            <Grid item className={classes.flexGrow} >
              Número
                        
              <Typography color='textPrimary'>
                {numero}
              </Typography>
            </Grid>
            <Grid className={classes.flexGrow} item>
              Assunto

              <Typography color='textPrimary'>
                {assunto}
              </Typography></Grid>
            <Grid item className={classes.flexGrow}>
                Interessados
              <Typography
                noWrap
                color='textPrimary'
                > {interessados[0]}
                <br />
                {interessados[1] && `e mais ${interessados.length}`
                }</Typography>
            </Grid>
            <Grid item className={classes.flexGrow}>
              Descrição
              <Typography
                noWrap
                className={classes.descricao}
                color='textPrimary'
              >
                {descricao}
              </Typography></Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card >
  )
}