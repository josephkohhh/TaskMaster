import { Stack, Box, Typography } from "@mui/material";

export const Counter = ({ totalTask, completedTask }) => {
  const boxStyle = {
    backgroundColor: "#F9F9F9",
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        width: "600px",
        height: "60px",
        margin: "0 auto",
        marginTop: "10px",
        padding: "10px",
      }}
    >
      <Box sx={boxStyle}>
        <Typography variant="h5">Total Task: {totalTask}</Typography>
      </Box>
      <Box sx={boxStyle}>
        <Typography variant="h5">Completed Task: {completedTask}</Typography>
      </Box>
    </Stack>
  );
};
