// src/components/Fuel.js
import React, {useState} from 'react';
import BasicCard from '../../components/Common/BasicCard/BasicCard';
import SearchBar from '../../components/Common/SearchBar/SearchBar';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import CommonButton from '../../components/Common/CommonButton/CommonButton';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import GridWrapper from '../../components/Common/GridWrapper/GridWrapper';
import BasicModal from '../../components/Common/BasicModal/BasicModal';


const Fuel = () => {
  const [open, setOpen] = useState(false);

  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value); 
    };

    const addUser = () => {
      setOpen(true)
      console.log('Add User Click')
    };

    const headerStyles = {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight:'20px',
        height: '65px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid rgba(0,0,0,0.12',
      },
      addUserButton:{
        fontSize: '1.05rem',
      },
    }

    return (
      <Box sx={headerStyles.wrapper}>
          <SearchBar
            placeholder = "Search anything you like"
            onChange={(event) => handleChange(event.target.value)}
            searchBarWidth = '720px'
          />
          <Box>
              <CommonButton
                  variant="contained"
                  onClick = {addUser}
                  size= "large"
                  sx={headerStyles.addUserButton}
              >
                Add User
              </CommonButton>
              <IconButton>
                <RefreshIcon />
              </IconButton>
          </Box>   
      </Box>
    )
  }

  const getContent = () => (
      <Typography
          align = "center"
          sx = {{margin:'40px 16px', color: 'rgba(0,0,0,0.6)',fontsize:'1.3rem'}}
      >
          No users for this project yet
      </Typography>
  );

  return (
    <GridWrapper>
         <BasicCard 
          header ={getHeader()}
          content = {getContent()}/>
          <BasicModal open={open} onClose={()=>setOpen(false)}/>
    </GridWrapper> 
  );
};

export default Fuel;
