import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 0.5,
              '&.MuiButtom-contained':{
                backgroundColor: '#009be5',
                '& :hover': {
                  backgroundColor: '#006db3'
                },
              },
              '&.MuiButton-outlined':{
                color: '#fff',
                boarderColor: '#fff',
                '&:hover':{
                  backgroundColor:'transparent'
                },
              },
            },
          },
        },
      },
      /*palette: {
        primary:{
            main: ""
          
        }
      }*/
    });
