import {
  Card,
  CardContent,
  ListItemAvatar,
  ListItemText,
  List,
  ListItem,
  Avatar,
  ListItemSecondaryAction,
  Button,
  Divider,
  Typography
} from "@material-ui/core";
import { RemoveRedEyeTwoTone } from "@material-ui/icons";
import React from "react";
import "./smallWidget.css";

export default function SmallWidget() {
  return (
    <div className="smallwidgetwrapper">
      <Card>
        <CardContent>
          <div className="cardheader">
          <Typography component="h4" className="titleitem mr">
            New Join Members
          </Typography>
          <div className="viewall">View All</div>
          </div>
          <List>
            <ListItem >
              <ListItemAvatar>
                <Avatar src="assets/user.jpg"/>
              </ListItemAvatar>
              <ListItemText className="listtitle" primary="Ankouri Abdellah" secondary="Join in : Jan 9, 2014" />
              <ListItemSecondaryAction>
                    <Button className="listbtn" edge="end" aria-label="Display"
                    startIcon={<RemoveRedEyeTwoTone /> }
                    >
                      View Profile
                    </Button>
                  </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <ListItem >
              <ListItemAvatar>
                <Avatar src="assets/user.jpg"/>
              </ListItemAvatar>
              <ListItemText className="listtitle" primary="Ankouri Abdellah" secondary="Join in : Jan 9, 2014" />
              <ListItemSecondaryAction>
                    <Button className="listbtn" edge="end" aria-label="Display"
                    startIcon={<RemoveRedEyeTwoTone /> }
                    >
                      View Profile
                    </Button>
                  </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <ListItem >
              <ListItemAvatar>
                <Avatar src="assets/user.jpg"/>
              </ListItemAvatar>
              <ListItemText className="listtitle" primary="Ankouri Abdellah" secondary="Join in : Jan 9, 2014" />
              <ListItemSecondaryAction>
                    <Button className="listbtn" edge="end" aria-label="Display"
                    startIcon={<RemoveRedEyeTwoTone /> }
                    >
                      View Profile
                    </Button>
                  </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <ListItem >
              <ListItemAvatar>
                <Avatar src="assets/user.jpg"/>
              </ListItemAvatar>
              <ListItemText className="listtitle" primary="Ankouri Abdellah" secondary="Join in : Jan 9, 2014" />
              <ListItemSecondaryAction>
                    <Button className="listbtn" edge="end" aria-label="Display"
                    startIcon={<RemoveRedEyeTwoTone /> }
                    >
                      View Profile
                    </Button>
                  </ListItemSecondaryAction>
            </ListItem>
           
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
