import React from "react";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import "./sidebar.css";
import {
  DashboardTwoTone,
  TimelineTwoTone,
  AttachMoneyTwoTone,
  PeopleTwoTone,
  StorefrontTwoTone,
  EqualizerTwoTone,
} from "@material-ui/icons";
import TopBar from "./../appbar/TopBar";
import { Link} from 'react-router-dom';
export default function Sidebar({open, setOpen}) {

  return (
    <>
      <TopBar open={open} setOpen={setOpen} />

      <div className={ open ? "Openleftside" : "Closeleftside"}>
        <List
          subheader={<li />}
          className={open ? "sidebar openSidebar" : "sidebar closeSidebar"}
        >
          <li>
            <ul>
                <ListSubheader className="listsubheader" disableSticky>
                  { open ? 'Dashboard' : '1'}
                </ListSubheader>
             
              <ListItem button component={Link} to="/dashboard">
                <ListItemIcon>
                  <DashboardTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Dashboard" className="listtext" />
                ) : (
                  ""
                )}
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/users">
                <ListItemIcon>
                  <TimelineTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Analytics" className="listtext" />
                ) : (
                  ""
                )}
              
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <AttachMoneyTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Sales" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
            </ul>
            <ul>
           
                <ListSubheader className="listsubheader" disableSticky>
                  {
                    open ? 'Quick Menu' : '2'
                  }
                </ListSubheader>
             
              <ListItem button component={Link} to="/users">
                <ListItemIcon>
                  <PeopleTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Users" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/products">
                <ListItemIcon>
                  <StorefrontTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Products" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <AttachMoneyTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Transactions" className="listtext" />
                ) : (
                  ""
                )}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <EqualizerTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Reports" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
            </ul>
            <ul>
             
                <ListSubheader className="listsubheader" disableSticky>
                  {
                    open ? 'Quick Menu' :'3'
                  }
                </ListSubheader>
             
              <ListItem button>
                <ListItemIcon>
                  <PeopleTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Users" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <StorefrontTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Products" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <AttachMoneyTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Transactions" className="listtext" />
                ) : (
                  ""
                )}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <EqualizerTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Reports" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
            </ul>
            <ul>
            
                <ListSubheader className="listsubheader" disableSticky>
                {
                    open ? 'Dashboard' : '4'
                  }
                </ListSubheader>
           
              <ListItem button>
                <ListItemIcon>
                  <DashboardTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Dashboard" className="listtext" />
                ) : (
                  ""
                )}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <TimelineTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Analytics" className="listtext" />
                ) : (
                  ""
                )}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <AttachMoneyTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Sales" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
            </ul>
            <ul>
            
                <ListSubheader className="listsubheader" disableSticky>
                  {
                    open ? 'Dashboard' : '5'
                  }
                </ListSubheader>
             
              <ListItem button>
                <ListItemIcon>
                  <DashboardTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Dashboard" className="listtext" />
                ) : (
                  ""
                )}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <TimelineTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Analytics" className="listtext" />
                ) : (
                  ""
                )}
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <AttachMoneyTwoTone className={ open ? "listitemicon block" : "listitemicon hide" } />
                </ListItemIcon>
                {open ? (
                  <ListItemText primary="Sales" className="listtext" />
                ) : (
                  ""
                )}{" "}
              </ListItem>
            </ul>
          </li>
        </List>
      </div>
    </>
  );
}
