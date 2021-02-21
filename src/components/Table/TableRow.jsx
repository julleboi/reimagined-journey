import React from 'react';
import MTableRow from '@material-ui/core/TableRow';
import MTableCell from '@material-ui/core/TableCell';

const TableRow = ({ items }) => {
  return (
    <MTableRow className='tableRow'>
      {
        items.map((value, idx) => 
          <MTableCell className='tableCell' key={idx}>
            {value}
          </MTableCell>)
      }
    </MTableRow>
  );
}

export default TableRow;