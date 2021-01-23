import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import theme from "../src/theme";
import CloseIcon from '@material-ui/icons/close';
import ImgPlaceHolder from "./ImgPlaceHolder";

const useStyles = makeStyles({
  deFora: {
    margin: '10px 0 10px 0',
    width: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    // height: 108
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-around',
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
  svg: {
    width: 100,
    height: 100,
  },
  square: {
    height: 50,
    width: 50,
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
  }

});

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
          setExpandir(!expandir);
          setDetalhes(props.value);
        }}
      >
        <CardContent>
          <Grid
            className={classes.CardContent}
            container
            spacing={2}
          >
            <ImgPlaceHolder className={classes.square} />
            <Grid item ><Typography>
              Número
                        </Typography>
              <Typography>
                {numero}
              </Typography>
            </Grid>
            <Grid item><Typography>
              Assunto
                        </Typography>
              <Typography>
                {assunto}
              </Typography></Grid>
            <Grid item >
              <Typography>
                Interessados
                        </Typography>
              <Typography
                noWrap
                className={classes.descricao}> {interessados[0]}
                <br />
                {interessados[1] && `e mais ${interessados.length}`
                }</Typography>
            </Grid>
            <Grid item><Typography>
              Descrição
                        </Typography>
              <Typography
                noWrap
                className={classes.descricao}
              >
                {descricao}
              </Typography></Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card >
  )
}