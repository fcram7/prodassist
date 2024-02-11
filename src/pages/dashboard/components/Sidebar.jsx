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

import Auth from '../../../network/auth';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { getAuth } from 'firebase/auth';

const Sidebar = ({ selectedMenu, handleSelectedMenu }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userName = user.displayName;

  const [open, setOpen] = useState(true);
  const navigate = useNavigate()

  const handleUserMenu = () => {
    setOpen(!open);
  }
  
  const onLogOut = async (e) => {
    e.preventDefault()
    
    try {
      await Auth.logout()
      navigate("/")
      return toast.success("Logout Successful")
      
    } catch (error) {
      console.error(error)
      return toast.error(error)
    }
  }

  return ( 
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
              <ListItemText primary={userName}/>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{pl: 4}} onClick={onLogOut}>
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
  );
}

Sidebar.propTypes = {
  selectedMenu: PropTypes.number,
  handleSelectedMenu: PropTypes.func,
}

export default Sidebar;