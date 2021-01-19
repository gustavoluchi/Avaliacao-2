import { Link, Typography } from "@material-ui/core";

export default function BotaoNovo() {
    return (
        <>
            {!search && <Typography>
                Você pode criar um novo processo&nbsp;
  <Link
                    variant='body2'
                    href="/PageCriaProcesso">
                    cliando aqui.
</Link>
            </Typography>}
        </>
    )
}

