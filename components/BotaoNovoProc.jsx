import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    botao: {
        height: 49,
        margin: '40px 0 0 20px'
    }
})

export default function BotaoNovoProc(props) {
    const {open, setOpen } = props;
    const classes = useStyles();
    return (
        <div>
            <Button
                className={classes.botao}
                variant="contained"
                color="secondary"
                onClick={() => setOpen(true)}
            >
                NOVO
      </Button>
        </div>
    )
}
