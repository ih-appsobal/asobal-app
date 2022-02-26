import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    bgNotification: Palette['primary'];
    accent: Palette['primary'];
    backgroundColor: Palette['primary'];
  }
  interface PaletteOptions {
    bgNotification: PaletteOptions['primary'];
    accent: PaletteOptions['primary'];
    backgroundColor: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#00B4FF",
    },
    secondary: {
      main: "#0003ff"
    },
    accent: {
      main: "#282f32"
    },
    backgroundColor: {
      main: "#15202b"
    },
    bgNotification: {
      main: "#f4f8fc14"
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: (props) => ({
          backgroundColor: props.theme.palette.backgroundColor.main,
          borderTop: `1px solid rgba(255, 255, 255, 0.15)`,
          borderBottom: `1px solid ${props.theme.palette.backgroundColor.main}`
        })
      }
    },
    // MuiBottomNavigationAction: {
    //   styleOverrides: {
    //     root: (props) => ({
    //       color: props.theme.palette.common.black,
    //     })
    //   }
    // }
  },
});

export default theme;