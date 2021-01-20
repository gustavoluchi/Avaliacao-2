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
}));


function generate(element) {
    return [0, 1, 2].map((value) =>
        cloneElement(element, {
            key: value,
        }),
    );
}
// aqui falta a função deletar item

export default function Lista(props) {
    const classes = useStyles();
    const { setListaDeProc, listaDeProc } = props;

    return (
        <div>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                    Interessados
          </Typography>
                <div className={classes.demo}>
                    <List dense>
                        {console.log(listaDeProc[6])}
                        {listaDeProc[6] && listaDeProc[6].interessados.map((nome, index) => {
                            return (
                                <ListItem
                                    key={index}>
                                    <ListItemText
                                        primary={nome}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="deletar interessado"
                                        // onClick={(index) => delete(index)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}

                        {/* {generate(
                            <ListItem>
                                <ListItemText
                                    primary="Aqui vai o nome"
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>,
                        )} */}
                    </List>
                </div>
            </Grid>
        </div>
    )
}
