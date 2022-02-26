import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#00B4FF",
    },
    secondary: {
      main: "#0003ff"
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
        color: "primary"
      }
    },
    MuiInputLabel: {
      defaultProps: {
        color: "primary"
      }
    },
  },
});

export default theme;