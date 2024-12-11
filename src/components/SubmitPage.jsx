import { Box, Card, CardContent } from "@mui/material";

import { topShadow } from "../assets/style/style";
import { Link } from "react-router-dom";

const SubmitPage = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(240, 235, 248)",
        minHeight: "90vh",
        padding: "2em",
        gap: "1em",
        marginTop: "3em",
      }}
    >
      <Card
        component="div"
        sx={{
          width: "40em",
          borderRadius: "0.5em",
          padding: "0.5em",
          height: "10em",
        }}
        style={topShadow}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
        >
          Your response has been recorded.<Link to={"/"}>{"Got to Home page"}</Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SubmitPage;
