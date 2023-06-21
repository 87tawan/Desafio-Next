import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';

interface DataTableProps {
  data: { [key: string]: string }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  
    const columns = data && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    
    <TableContainer component={Paper} sx={{
      height: '60vh',
        width: '90vw',
        overflow: 'auto',
        textAlign: 'center',
        border: '1px solid grey'
    }}>
        <p>Aqui é a rota get solicitada:</p>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column}>{row[column]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default DataTable;
