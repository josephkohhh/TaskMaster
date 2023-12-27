import {
  AppBar,
  Toolbar,
  createTheme,
  ThemeProvider,
  Typography,
  Stack,
  Button,
} from "@mui/material";

export const Header = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Poppins", sans-serif',
      h2: {
        fontSize: "4.5rem",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          sizeLarge: {
            fontSize: "1.3rem",
            padding: "15px 30px",
          },
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "100px",
              padding: "25px",
            }}
          >
            <Typography variant="h2">TaskMaster</Typography>

            <Stack direction="row" spacing={8} sx={{ marginTop: "10px" }}>
              <Button
                color="inherit"
                size="large"
                disableRipple
                sx={{
                  "&:hover": {
                    backgroundColor: "inherit",
                    fontWeight: "600",
                  },
                }}
              >
                Code
              </Button>
              <Button
                color="inherit"
                size="large"
                disableRipple
                sx={{
                  "&:hover": {
                    backgroundColor: "inherit",
                    fontWeight: "600",
                  },
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                size="large"
                disableRipple
                sx={{
                  "&:hover": {
                    backgroundColor: "inherit",
                    fontWeight: "600",
                  },
                }}
              >
                About
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
