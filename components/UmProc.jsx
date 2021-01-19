import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import theme from "../src/theme";



/* 
[
    {
        "id": ********-****-****-****-****-**********
        "04c7197f-c0fe-4dab-b27c-d69611eca40f",
        "numero": "SOFT 2018/00008",
        "entrada": "07/08/2018",
        "descricao": "Solicitação de licença-prêmio",
        "assunto" : "Licença",
    	"interessados": ["Edmilson Cherem"]
    }
]
*/

export default function UmProc(props) {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
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
            width: props.width
        },
    });
    const { id, interessados, descricao, entrada, numero, assunto } = props.val;
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(true);
    return (
        // <>
        // {props.val !== undefined &&
        <Card
            className={classes.deFora}
        >
            {/* {console.log()} */}
            <CardActionArea
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <CardContent>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        direction="row"
                    >
                        <Grid item className={classes.square} />
                        <Grid item xs><Typography>
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
                        <Grid item><Typography>
                            Interessados
                        </Typography>
                            <Typography>
                                {interessados}
                        </Typography></Grid>
                        <Grid item><Typography>
                            Descrição
                        </Typography>
                            <Typography>
                                {descricao}
                        </Typography></Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card >
        // }
        // </>
    )
}