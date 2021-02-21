import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Wrapper = ({ children }) => {
  return (
    <Box data-testid='tableFooterElement' textAlign='center' p={2}>
      { children }
    </Box>
  );
}

const TableFooter = ({ isLoading, error, buttonCb }) => {
  if (isLoading)
    return (
      <Wrapper>
        <CircularProgress className='tableLoading' />
      </Wrapper>
    );

  const handleClick = (e) => {
    e.preventDefault();
    buttonCb();
  }

  const isError = error !== "";

  return (
    <Wrapper>
      <Box 
        className='tableError'
        hidden={!isError}
        mb={2}
      >
        <Typography color='error'>{error}</Typography>
      </Box>
      <Button 
        className='loadButton'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        {isError ? 'Retry' : 'Load more'}
      </Button>
    </Wrapper>
  );
}

export default TableFooter;
