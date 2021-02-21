import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MTableHead from '@material-ui/core/TableHead';
import TableRow from './TableRow';

const useStyles = makeStyles({
  root: {
    '& th': {
      fontWeight: 'bold'
    }
  }
})

const TableHeader = ({ columnNames }) => {
  const classes = useStyles();

  return (
    <MTableHead className={'tableHeader ' + classes.root}>
      <TableRow items={columnNames} />
    </MTableHead>
  );
}

export default TableHeader;