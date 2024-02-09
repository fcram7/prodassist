import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';

import { useState } from 'react';

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(1)
  const [open, setOpen] = useState(true);

  const handleSelectedMenu = (e, index) => {
    setSelectedMenu(index)
  }

  const handleUserMenu = () => {
    setOpen(!open);
  }

  return ( 
    <aside className="dashboard-sidebar-container">
      <div className="dashboard-sidebar-content grid">
        <div className="dashboard-sidebar-title">
          <h1 className="sidebar-title">Prodassist</h1>
        </div>

        <div className="dashboard-sidebar-menu-wrapper">
          <h2 className="sidebar-subtitle">Menu</h2>

          <List>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedMenu === 0}
                onClick={(e) => handleSelectedMenu(e, 0)}
              >
                <ListItemIcon>
                  <ChecklistRtlOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="To-Do List"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedMenu === 1}
                onClick={(e) => handleSelectedMenu(e, 1)}
              >
                <ListItemIcon>
                  <AccessTimeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Pomodoro"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleUserMenu}>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="User Name"/>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <ListItemIcon>
                    <MeetingRoomOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout"/>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>
      </div>
    </aside>
   );
}
 
export default Sidebar;