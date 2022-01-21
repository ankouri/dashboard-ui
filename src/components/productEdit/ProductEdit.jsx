import React,{useState} from 'react';
import './productEdit.css';
import {
    IconButton,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar,
    ListItemSecondaryAction,
    Button,
  } from "@material-ui/core";
  import {
  EditTwoTone,
    EmailTwoTone,
    PersonTwoTone,
    PhoneAndroidTwoTone,
    SaveTwoTone,
    CloseTwoTone,
    CameraAltTwoTone,
  } from "@material-ui/icons";
  import TextAreaEdit from './../textareaEdit/TextAreaEdit';


export default function ProductEdit({productId, setEdit}) {
    const [editName, setEditName] = useState({
        field: "name",
        state: false,
        value: "Product 1",
      });
      const [editPrice, setEditPrice] = useState({
        field: "price",
        state: false,
        value: "56$",
      });
      const [editStock, setEditStock] = useState({
        field: "stock",
        state: false,
        value: "120",
      });

    return (
        <div>
          <Card>
        <CardContent>
          <Typography component="h4" className="titleitem mr">
            Edit Product : {productId}
          </Typography>
          <div className="edituserwrapper">
            <Avatar src="assets/user.jpg" alt="" className="edituseravatar" />
            <label htmlFor="file">
                      <IconButton component="span" htmlFor="file" className="editavatar">
                        <input
                          type="file"
                          style={{ display: "none" }}
                          id="file"
                          accept=".jpg,.png,.jpeg"
                          onChange={(e) => {
                            // setCoverFile(e.target.files[0]);
                            // setCoverPreview(true);
                          }}
                        />

                        <CameraAltTwoTone fontSize="small"/>
                      </IconButton>
                    </label>

            <List component="nav" className="userinfolist">
              <ListItem>
                <ListItemIcon>
                  <PersonTwoTone className="listitemicon" />
                </ListItemIcon>
                {editName.field === "name" &&
                editName.state === true ? (
                  <TextAreaEdit
                    column={editName}
                    setColumn={setEditName}
                  />
                ) : (
                  <ListItemText
                    primary={editName.value}
                    className="listtext"
                    id="name"
                  />
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => {
                      setEditName({
                        field: "name",
                        state: true,
                        value: "Product 01",
                      });
                    }}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditTwoTone />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PersonTwoTone className="listitemicon" />
                </ListItemIcon>
                {editPrice.field === "price" &&
                editPrice.state === true ? (
                  <TextAreaEdit
                    column={editPrice}
                    setColumn={setEditPrice}
                  />
                ) : (
                  <ListItemText
                    primary={editPrice.value}
                    className="listtext"
                    id="price"
                  />
                )}

                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => {
                      setEditPrice({
                        field: "price",
                        state: true,
                        value: "1200",
                      });
                    }}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditTwoTone />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemIcon>
                  <EmailTwoTone className="listitemicon" />
                </ListItemIcon>

                <ListItemText primary="Email" className="listtext" id="email" />

              </ListItem>
              <Divider />

              <ListItem>
                <ListItemIcon>
                  <PhoneAndroidTwoTone className="listitemicon" />
                </ListItemIcon>
                {editStock.field === "stock" && editStock.state === true ? (
                  <TextAreaEdit column={editStock} setColumn={setEditStock} />
                ) : (
                  <ListItemText
                    primary={editStock.value}
                    className="listtext"
                    id="stock"
                  />
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => {
                      setEditStock({
                        field: "stock",
                        state: true,
                        value: "120",
                      });
                    }}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditTwoTone />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />

            
            </List>
          </div>
          <div className="editusercontrols">
            <Button  onClick={ ()=>{
              setEdit(false);
            } }  className="btnsuccess" startIcon={
              <SaveTwoTone />
            }>
              Save Changes
            </Button>
            <Button onClick={ ()=>{
              setEdit(false);
            } }
            className="btnerror" startIcon={
              <CloseTwoTone  />
            }>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
        </div>
    )
}
