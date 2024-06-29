// src/components/Index
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './navbar_items';
import { useParams, useNavigate } from 'react-router-dom';

const Layout = () => {
    const drawerWidth = 230;
    const navigate = useNavigate();
  return (

    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#033b01',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {mainNavbarItems.map((item, index) => (
        <ListItem 
            key={item.id} 
            disablePaddings
            onClick={()=> navigate(item.route)}
            >
          <ListItemButton>
            <ListItemIcon sx={{color: '#f5f6f7',}}>
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={{color:'#f5f6f7',}}primary={item.label} />
          </ListItemButton>
        </ListItem>

      ))}
    </List>
  </Drawer>
   
  );
};

export default Layout;

