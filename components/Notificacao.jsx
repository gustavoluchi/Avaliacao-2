import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars(props) {
    const { open, setOpen, texto, funcionou } = props;
  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={funcionou}>
            {console.log(funcionou)}
          {texto}
        </Alert>
      </Snackbar>
    </>
  );
}