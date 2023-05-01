import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {


    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,status:"good" },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , status:"bad"},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,status:"good" },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status:"bad" },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,status:"good"},
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150,status:"good" },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , status:"bad"},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status:"bad" },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status:"bad" },
      ];


    return(
      <TableContainer className="table" component={Paper}>
      <Table sx={{minWidth:650}}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking</TableCell>
            <TableCell className="tableCell" align="right">Product</TableCell>
            <TableCell className="tableCell" align="right">Customer</TableCell>
            <TableCell className="tableCell" align="right">Date</TableCell>
            <TableCell  className="tableCell" align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="tableCell" align="right">{row.lastName}</TableCell>
              <TableCell className="tableCell" align="right"> {row.firstName} </TableCell>
              <TableCell className="tableCell" align="right"> {row.age} </TableCell>
              <TableCell className="tableCell" align="right"> 
                <span className={`status ${row.status}`}> {row.status} </span>
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default List;