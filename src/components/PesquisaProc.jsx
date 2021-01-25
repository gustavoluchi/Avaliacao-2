import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment, TextField, IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  pesquisa: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'noWrap',
    height: 71,
  }
})

export default function Pesquisa(props) {
  const classes = useStyles();
  const { search, setSearch, submitSearch } = props;
  return (
    <TextField
      onChange={event => setSearch(event.target.value)}
      onKeyPress={event => {
        if (event.key == 'Enter') {
          submitSearch(event.target.value);
        }
      }}
      fullWidth
      className={classes.pesquisa}
      id="standard-error-helper-text"
      helperText={(search !== "" && search.length < 3) ? "Ao menos 3 caracteres para pesquisa. Para números use 001." : false}
      error={(search !== "" && search.length < 3) ? true : false}
      variant="outlined"
      InputProps={{
        placeholder: 'Pesquise por uma informação do processo',
        'aria-label': 'Pesquise por uma informação do processo',
        endAdornment: (
          <InputAdornment position="end" >
            <IconButton
              aria-label='pesquisar'
              onClick={() => submitSearch(search)}
              disabled={search.length < 3 ? true : false}
              color='primary'
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
