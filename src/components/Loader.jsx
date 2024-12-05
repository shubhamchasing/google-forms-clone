import { Box, CircularProgress } from "@mui/material";

function CircularLoader() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
export default CircularLoader;
