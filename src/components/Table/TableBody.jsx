import React from 'react';
import MTableBody from '@material-ui/core/TableBody';
import TableRow from './TableRow';

const TableBody = ({ rows, rowLength }) => {
  return (
    <MTableBody className='tableBody'>
      { 
        rows.map((data, idx) => 
          <TableRow 
            items={data.slice(0, rowLength)}
            key={idx}
          />)
      }
    </MTableBody>
  );
}

export default TableBody;