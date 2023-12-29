import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

export const Header = () => {
  const buttonStyle = {
    size: "large",
    disableRipple: true,
    sx: {
      color: "white",
      fontSize: "1.1rem",
      padding: "15px 30px",
      transition: "all 300ms ease",
      "&:hover": {
        fontWeight: "600",
        textDecoration: "underline",
        textUnderlineOffset: "1rem",
      },
    },
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            background: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px 0 10px 0",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <Typography variant="h2" color={"white"}>
            TaskMaster
          </Typography>

          <Stack direction="row" spacing={8} sx={{ marginTop: "10px" }}>
            <Button {...buttonStyle}>Code</Button>
            <Button {...buttonStyle}>Home</Button>
            <Button {...buttonStyle}>About</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
