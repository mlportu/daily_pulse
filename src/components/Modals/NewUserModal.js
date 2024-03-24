import * as React from 'react';
import BasicModal from '../Common/BasicModal/BasicModal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


const newUserModal = ({open, onClose}) => {
    const modalStyles = {
        inputFields: {
            dipslay: 'flex',
            flexDirection: 'column',
            marginTop:'20px',
            marginBotton: '15px',
            'MuiInput-root':{
                marginBottom:'20px',
            },
        },
    };

    const getContent = () => (
        <Box sx={modalStyles.inputFields}>
           <Input placeholder="E-mail"/>
           <Input placeholder="Phone number"/>
           <Input placeholder="User id"/>
        </Box>
    );

    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="New User"
            subTitle="Fill out inputs and hit 'submit' button"
            content ={getContent()}
            validate={()=>{}}
        >
        </BasicModal>
    )
}

export default newUserModal; 