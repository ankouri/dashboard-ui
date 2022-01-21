import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {
  Avatar,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { DeleteForeverTwoTone, EditTwoTone } from "@material-ui/icons";
import UserEdit from "../../components/userEdit/UserEdit";
import {UserRows} from '../../dummyData';

export default function UserList() {
  const [edit, setEdit] = useState(false);
  const [editedUser, setEditedUser] = useState('');
  const [rows, setRows] = useState(UserRows);

  const handleEditUser = (event, param) => {
    setEdit(true);
    setEditedUser(param.id);
    
  };

  const handleDeleteUser = (event, param) =>{
      setEdit(false);
      setRows(rows.filter((item) => item.id !== param.id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 160 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 250,
      renderCell: (param) => {
        return (
          <>
            <Avatar src={param.row.avatar} alt="" />
            <Typography component="h6" style={{ marginLeft: "10px" }}>
              {param.row.username}
            </Typography>
          </>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "status", headerName: "Status", type: "number", width: 120 },
    {
      field: "transaction",
      headerName: "Transactions",
      type: "number",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (param) => {
        return (
          <>
            <Button
              onClick={(event) => {
                
                handleEditUser(event, param);
              
              }}
              startIcon={<EditTwoTone className="listitemicon" />}
            >
              Edit
            </Button>

            <Button
            onClick={
                (event)=>{
                    handleDeleteUser(event, param);
                }
            }
             startIcon={<DeleteForeverTwoTone color="error" />}>
              Delete
            </Button>
          </>
        );
      },
      disableClickEventBubbling: true,
    },
  ];



  return (
    <div className="userlist">
  
      <Grid container>
        <Grid item xs={ edit ? 8 : 12}>
          <div className="userdatagrid">
              
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={20}
              disableSelectionOnClick
            />
          </div>
        </Grid>
        <Grid item xs={edit ? 4 : 1} className={ edit ? 'editFrame-isOpen' : 'editFrame-isClose'}>
        <div className="userdatagrid">
            <UserEdit userId={editedUser} setEdit={setEdit}/>
        </div>
        </Grid>
       
      </Grid>
    </div>
  );
}
