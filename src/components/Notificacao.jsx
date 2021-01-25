import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars(props) {
  const { acao, setAcao } = props;
  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    setAcao({
      open: false,
      texto: ''
    });
  };
  // acao.caso possível: ["error","info","success","warning"]
  return (
    <>
      <Snackbar open={acao.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={acao.caso}>
          {acao.texto}
        </Alert>
      </Snackbar>
    </>
  );
}