import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';






function Summary() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
      ];

  return (
      <div className="container">

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
      
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:"16px",fontWeight:"bold",width:"40%"}} >Orders</TableCell>
            <TableCell style={{fontSize:"16px",fontWeight:"bold"}} >Address</TableCell>
            <TableCell style={{fontSize:"16px",fontWeight:"bold"}} >Time</TableCell>
            {/* <TableCell style={{fontSize:"16px",fontWeight:"bold"}} align="right">Carbs&nbsp;(g)</TableCell> */}
            {/* <TableCell style={{fontSize:"16px",fontWeight:"bold"}} align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{fontSize:"16px"}} >
                {row.name}
              </TableCell>
              <TableCell style={{fontSize:"16px"}}  >{row.calories}</TableCell>
              <TableCell style={{fontSize:"16px"}}>{row.fat}</TableCell>
              {/* <TableCell style={{fontSize:"16px"}} align="right">{row.carbs}</TableCell> */}
              {/* <TableCell style={{fontSize:"16px"}} align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
  );
}
export default  Summary