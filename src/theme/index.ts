import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#0003ff",
    },
    secondary: {
      main: "#00B4FF"
    }
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