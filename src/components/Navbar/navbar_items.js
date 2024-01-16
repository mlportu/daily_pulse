import React from 'react';
import SpeedSharpIcon from '@mui/icons-material/SpeedSharp';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';
import SyncTwoToneIcon from '@mui/icons-material/SyncTwoTone';


export const mainNavbarItems = [
    {
        id: 0,
        icon: <SpeedSharpIcon />,
        label: 'Fuel',
        route: 'fuel',
    },
    {
        id: 1,
        icon: <DoubleArrowTwoToneIcon/>,
        label: 'Move',
        route: 'move',
    },
    {
        id: 2,
        icon: <SyncTwoToneIcon/>,
        label: 'Recover',
        route: 'recover',
    },
    
]