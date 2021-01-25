import { Grid, IconButton, List, ListItem, ListItemSecondaryAction, makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),

  },
  text: {
    fontWeight: '400',
    color: '#000' 
  }
}));


export default function Lista(props) {
  const classes = useStyles();
  const { setInteressados, interessados, qualProc } = props;

  return (
    <Grid item xs={12} md={6}>
      <Typography className={classes.title}>
        Interessados
          </Typography>
      <div className={classes.demo}>
        <List dense>
          {interessados.map((nome, index) => {
            return (
              <ListItem
                key={index}
                className={classes.text}>
                {nome}
                
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="deletar interessado"
                    onClick={() =>
                      setInteressados(interessados.filter((_, indexBotao) => indexBotao !== index))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </div>
    </Grid>
  )
}
