import { Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { cloneElement, useState } from "react";

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
    fontWeight: 'initial',
  }
}));

// aqui falta a função deletar item
function buscaProc(id) {
  http://localhost:3002/processo/04c7197f-c0fe-4dab-b27c-d69611eca40f
  axios.get(`http://localhost:3002/processo/${id}`)
    .then(response => setEmEdicao(response));
}

export default function Lista(props) {
  const [emEdicao, setEmEdicao] = useState({});
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
                key={index}>
                <ListItemText
                  className={classes.text}
                  primary={nome}
                />
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
