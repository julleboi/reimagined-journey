import React from 'react';
import Table from '../Table';
import api from '../../lib/api';
import { formatTimestamp } from '../../utils';

const COLUMN_NAMES = ['Date', 'Project ID', 'Old value', 'New value']

const fetchAndFormat = async () => {
  const resp = await api.getProjectsDiff();

  return resp.data
    .map(el => {
      const { id, timestamp, diff: [{ oldValue, newValue }] } = el;
      const dateStr = formatTimestamp(timestamp);
      return [dateStr, id, oldValue, newValue];
    });
}

// Descending order, by date
const comparator = (a, b) => {
  const [dateA] = a;
  const [dateB] = b;

  const [yearA, monthA, dayA] = dateA.split('-');
  const [yearB, monthB, dayB] = dateB.split('-');

  return yearB-yearA || monthB-monthA || dayB-dayA;
}

const Users = () => {
  return (
    <Table 
      title="Projects history"
      columnNames={COLUMN_NAMES}
      fetchData={fetchAndFormat}
      compareFn={comparator}
    />
  );
}

export default Users;