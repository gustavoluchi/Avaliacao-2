import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	botao: {
		height: 49,
		margin: '0 10px 0 10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    alignSelf: 'baseline',
	}
})

export default function BotaoNovoProc(props) {
	const { open, setOpen, texto, acao } = props;
	const classes = useStyles();
	return (
		<>
			<Button
				className={classes.botao}
				variant="contained"
				color='secondary'
				onClick={acao}
			>
				{texto}
			</Button>
		</>
	)
}
