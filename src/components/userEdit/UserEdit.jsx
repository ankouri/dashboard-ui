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
import React, { useState } from "react";
import "./userEdit.css";
import {
  EditTwoTone,
  EmailTwoTone,
  RoomTwoTone,
  PersonTwoTone,
  PhoneAndroidTwoTone,
  SaveTwoTone,
  CloseTwoTone,
  CameraAltTwoTone,
} from "@material-ui/icons";
import TextAreaEdit from "../textareaEdit/TextAreaEdit";

export default function UserEdit({ userId, setEdit }) {
  const [editUsername, setEditUsername] = useState({
    field: "username",
    state: false,
    value: "Username",
  });
  const [editFllname, setEditFllname] = useState({
    field: "fullname",
    state: false,
    value: "Fullname",
  });
  const [editPhone, setEditPhone] = useState({
    field: "phone",
    state: false,
    value: "Phone",
  });
  const [editLocation, setEditLocation] = useState({
    field: "location",
    state: false,
    value: "Location",
  });

  return (
    <div>
      <Card>
        <CardContent>
          <Typography component="h4" className="titleitem mr">
            Edit User : {userId}
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

                        <CameraAltTwoTone fontSize="small" />
                      </IconButton>
                    </label>

            <List component="nav" className="userinfolist">
              <ListItem>
                <ListItemIcon>
                  <PersonTwoTone className="listitemicon" />
                </ListItemIcon>
                {editUsername.field === "username" &&
                editUsername.state === true ? (
                  <TextAreaEdit
                    column={editUsername}
                    setColumn={setEditUsername}
                  />
                ) : (
                  <ListItemText
                    primary={editUsername.value}
                    className="listtext"
                    id="username"
                  />
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => {
                      setEditUsername({
                        field: "username",
                        state: true,
                        value: "Username",
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
                {editFllname.field === "fullname" &&
                editFllname.state === true ? (
                  <TextAreaEdit
                    column={editFllname}
                    setColumn={setEditFllname}
                  />
                ) : (
                  <ListItemText
                    primary={editFllname.value}
                    className="listtext"
                    id="fullname"
                  />
                )}

                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => {
                      setEditFllname({
                        field: "fullname",
                        state: true,
                        value: "Fullname",
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
                {editPhone.field === "phone" && editPhone.state === true ? (
                  <TextAreaEdit column={editPhone} setColumn={setEditPhone} />
                ) : (
                  <ListItemText
                    primary={editPhone.value}
                    className="listtext"
                    id="phone"
                  />
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => {
                      setEditPhone({
                        field: "phone",
                        state: true,
                        value: "06 41 09 32 35",
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
                  <RoomTwoTone className="listitemicon" />
                </ListItemIcon>
                {editLocation.field === "location" &&
                editLocation.state === true ? (
                  <TextAreaEdit
                    column={editLocation}
                    setColumn={setEditLocation}
                  />
                ) : (
                  <ListItemText
                    primary={editLocation.value}
                    className="listtext"
                    id="location"
                  />
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={(e) => {
                      setEditLocation({
                        field: "location",
                        state: true,
                        value: "Taznakhte, Ouarzazate",
                      });
                    }}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditTwoTone />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
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
  );
}
