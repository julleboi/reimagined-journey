import React from 'react';
import MTable from '@material-ui/core/Table'
import MTableContainer from '@material-ui/core/TableContainer';
import MTableSortLabel from '@material-ui/core/TableSortLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

const Table = ({ title, columnNames, fetchData, compareFn }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [order, setOrder] = React.useState('desc');
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState('');

  const fetchSomeData = async () => {
    setIsLoading(true);
    try {
      // Fetch formatted data with the function given as a prop
      const someNewData = await fetchData();
      setData([...data, ...someNewData]);
      setError('');
    } catch (err) {
      console.error(err);
      setError('We had problems fetching your data. Please try again.');
    }
    setIsLoading(false);
  }

  const handleToggleOrder = (e) => {
    e.preventDefault();
    setOrder(order === 'desc' ? 'asc' : 'desc');
  }

  const sortedData = React.useMemo(() => {
    // No comparator provided
    if (!compareFn) return data;

    const sorted = data.sort(compareFn);
    return order === 'desc'
      ? sorted
      : sorted.reverse(); 
  }, [data, order, compareFn]);

  // Merge new data
  React.useEffect(() => {
    setData(sortedData);
  }, [sortedData]);

  // Fetch initial data
  React.useEffect(() =>  {
    fetchSomeData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MTableContainer>
      <Box 
        textAlign='center'
        display='flex'
        justifyContent='space-between'
        p={2}
      >
        <Typography color='primary' variant='h6'>{title}</Typography>
        <MTableSortLabel
          className='toggleOrder'
          active
          direction={order}
          onClick={handleToggleOrder}
        >
          <Typography color='textSecondary'>Toggle order</Typography>
        </MTableSortLabel>
      </Box>
      <MTable className='table'>
        <TableHeader columnNames={columnNames} />
        <TableBody rows={data} rowLength={columnNames.length} />
      </MTable>
      <TableFooter error={error} isLoading={isLoading} buttonCb={fetchSomeData} />
    </MTableContainer>
  );
}

export default Table;
