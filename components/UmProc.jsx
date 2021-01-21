import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import theme from "../src/theme";

export default function UmProc(props) {
    const useStyles = makeStyles({
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
        paper: {
            margin: theme.spacing(1),
        },
        svg: {
            width: 100,
            height: 100,
        },
        polygon: {
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: 1,
        },
        square: {
            height: 50,
            width: 50,
            backgroundColor: '#C4C4C4',
        },
        deFora: {
            margin: '10px 0 10px 0',
            width: props.width,
            // height: 108
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
    const { id, interessados, descricao, entrada, numero, assunto } = props.val;
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(true);
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
                    setIsOpen(!isOpen);
                }}
            >
                <CardContent>
                    <Grid
                        className={classes.CardContent}
                        container
                        spacing={2}
                    >
                        <Grid item className={classes.square} />
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