import { Link, Typography } from "@material-ui/core";

export default function BotaoNovo(props) {
    const {open, setOpen, setIdCadastro } = props;
    return (
        <>
            <Typography align='center' >
                Você pode criar um novo processo&nbsp;
                <Link 
                component="button"
                variant="body2"
                onClick={() => {setOpen(true)
                  setIdCadastro({})}}>
                    clicando aqui.
                </Link>
            </Typography>
        </>
    )
}

