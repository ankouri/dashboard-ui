import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
} from "@material-ui/core";
import {  MenuOpenTwoTone, Notifications, Brightness4TwoTone } from '@material-ui/icons';
import './topbar.css';
import { Link } from 'react-router-dom';
import TranslateSelect from '../translate/Translate';



export default function TopBar({open, setOpen}) {
  return (
    
    <div className="topbar">

      <AppBar className="appbar" elevation={0} position="fixed"> 
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="topbarButton"
            onClick={() => setOpen(!open)}
          >
            <MenuOpenTwoTone className={ open ? 'closeBtn' : 'openBtn'} />
          </IconButton>
          <Link to="/dashboard" variant="h6" className="topbarLogo"> ADMIN </Link>
     
          <div className="topbarRight">
          
          <TranslateSelect/>
          <IconButton className="RightBtn">
          <Badge badgeContent={4} color="secondary">
            <Notifications/>
            </Badge>
          </IconButton>
          <IconButton className="RightBtn">
            <Brightness4TwoTone/>
          </IconButton>
          
          <IconButton className="RightBtn">
          <Avatar
            src="assets/user.jpg"
            alt="A"
          />
          </IconButton>
          
          </div>
        </Toolbar>
      </AppBar>
      
    
    </div>
   
  );
}
