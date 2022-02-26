import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    bgNotification: Palette['primary'];
  }
  interface PaletteOptions {
    bgNotification: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#0003ff",
    },
    secondary: {
      main: "#00B4FF"
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
    MuiInputBase: {
      defaultProps: {
        color: "secondary"
      }
    },
    MuiInputLabel: {
      defaultProps: {
        color: "secondary"
      }
    }
  },
});

export default theme;