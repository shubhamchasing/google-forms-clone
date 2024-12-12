import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const SmallScreenCheck = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width:818px)");

  if (isSmallScreen) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(255, 255, 255, 0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1100,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="text.primary">
          Please access our website on a larger screen like a desktop for the
          best experience.
        </Typography>
      </Box>
    );
  }

  return <>{children}</>;
};

export default SmallScreenCheck;
