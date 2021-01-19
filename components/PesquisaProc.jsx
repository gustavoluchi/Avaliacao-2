import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment, TextField } from '@material-ui/core';

export default function Pesquisa(props) {
  const { search, setSearch } = props;
  return (
    <TextField
      onChange={event => setSearch(event.target.value)}
      fullWidth
      id="standard-error-helper-text"
      helperText= {(search !=="" && search.length < 3)? "Ao menos 3 caracteres para pesquisa. Para números use 001." : false}
      error={(search !=="" && search.length < 3)? true : false}
      variant="outlined"
      InputProps={{
        placeholder: 'Pesquise por uma informação do processo',
        'aria-label': 'Pesquise por uma informação do processo',
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="secondary" />
          </InputAdornment>
        ),
      }}
    />
  );
}