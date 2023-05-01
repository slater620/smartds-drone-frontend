import "./datatable.scss"
import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { droneColumns } from "../../datasource";
import { droneRows } from "../../datasource";
import { userColumns } from "../../datasource";
import { userRows } from "../../datasource";
import { Link} from "react-router-dom";


const Datatable = () => {

    const [data , setData] = React.useState(droneRows);

   

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }
    const actionColumn = [
        {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell: (params) => {

            return (
                <div className="cellAction">
                    <Link to="/missions/test" style={{textDecoration:"none"}} >
                    <div className="viewButton">view</div>
                    </Link>
                    <div className="deleteButton" onClick={ () => handleDelete(params.row.id)}>delete</div>
                    
                </div>
            );
        },
        },
    ];
    return (

        <div className="datatable">
            <div className="datatableTitle">
                Add New DRONE
                <Link to="/users/new" style={{textDecoration:"none"}} className="link">
                    Add New
                </Link>
            </div>
             <DataGrid
                rows={data}
                columns={droneColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable;