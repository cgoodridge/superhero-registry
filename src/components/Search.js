import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Search = ({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <>
        <Grid container>
          <Grid item>
            <FormControl>
                
                <InputLabel htmlFor="query" className="sr-only">Search</InputLabel>
                <Input type="text" 
                    startAdornment={
                      <InputAdornment position="start">
                        <BiSearch style={{color: 'whitesmoke'}}/>
                      </InputAdornment>
                    }
                    name="query" 
                    id="query" 
                    value={query} 
                    color="secondary"
                    onChange={(event) => {onQueryChange(event.target.value)}}
                    placeholder="Search" />
            </FormControl>
          </Grid>

          <Grid item>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div>
                <IconButton onClick={handleClick}>
                  <SortIcon color="secondary"/>
                </IconButton>
                
              </div>
            </div>
          </Grid>
        </Grid>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        <MenuItem onClick={() => onSortByChange('name')}>Name {(sortBy === 'name') && <BiCheck />}</MenuItem>
        <MenuItem onClick={() => onSortByChange('alias')}>Alias {(sortBy === 'alias') && <BiCheck />}</MenuItem>
        <MenuItem onClick={() => onSortByChange('birthDate')}>Birth Date {(sortBy === 'date') && <BiCheck />}</MenuItem>
        <MenuItem onClick={() => onOrderByChange('asc')}>Asc {(orderBy === 'asc') && <BiCheck />}</MenuItem>
        <MenuItem onClick={() => onOrderByChange('desc')}>Desc {(orderBy === 'desc') && <BiCheck />}</MenuItem>
      </Menu>
    </>
    );
}

export default Search;