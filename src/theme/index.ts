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
      main: "#00B4FF",
    },
    secondary: {
      main: "#0003ff"
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
  },
});

export default theme;