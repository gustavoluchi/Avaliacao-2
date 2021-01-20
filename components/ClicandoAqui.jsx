import { Link, Typography } from "@material-ui/core";

export default function BotaoNovo(props) {
    const {open, setOpen } = props;
    return (
        <>
            <Typography>
                Você pode criar um novo processo&nbsp;
                <Link 
                component="button"
                variant="body2"
                onClick={() => setOpen(true)}>
                    clicando aqui.
                </Link>
            </Typography>
        </>
    )
}

