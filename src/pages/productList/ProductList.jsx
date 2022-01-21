import React, { useState } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { ProductRows } from "../../dummyData";
import { Avatar, Typography, Button, Grid } from "@material-ui/core";
import { EditTwoTone, DeleteForeverTwoTone } from "@material-ui/icons";
import ProductEdit from "../../components/productEdit/ProductEdit";

export default function ProductList() {
  const [rows, setRows] = useState(ProductRows);
  const [edit, setEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState("");

  const handleDeleteProduct = (event, param) => {
    setEdit(false);
    setRows(rows.filter((item) => item.id !== param.id));
  };

  const handleEditProduct = (event, param) => {
    setEdit(true);
    setEditedProduct(param.id);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 160 },
    {
      field: "product_image",
      headerName: "Product",
      width: 250,
      renderCell: (param) => {
        return (
          <>
            <Avatar src={param.row.avatar} alt="" />
            <Typography component="h6" style={{ marginLeft: "10px" }}>
              {param.row.name}
            </Typography>
          </>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", type: "number", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (param) => {
        return (
          <>
            <Button
              onClick={(event) => {
                handleEditProduct(event, param);
              }}
              startIcon={<EditTwoTone className="listitemicon" />}
            >
              Edit
            </Button>

            <Button
              onClick={(event) => {
                handleDeleteProduct(event, param);
              }}
              startIcon={<DeleteForeverTwoTone color="error" />}
            >
              Delete
            </Button>
          </>
        );
      },
      disableClickEventBubbling: true,
    },
  ];

  return (
    <div className="productlist">
      <Grid container>
        <Grid item xs={edit ? 8 : 12}>
          <div className="productdatagrid">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={20}
              disableSelectionOnClick
            />
          </div>
        </Grid>
        <Grid
          item
          xs={edit ? 4 : 1}
          className={edit ? "editFrame-isOpen" : "editFrame-isClose"}
        >
          <div className="productdatagrid">
            <ProductEdit productId={ editedProduct } setEdit={ setEdit } />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
