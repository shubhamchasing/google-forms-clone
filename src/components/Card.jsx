import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const FormCard = ({ title, image }) => {
  return (
    <Box>
      <Card component="div" sx={{ width: "12em", height: "8em" }}>
        <CardActionArea sx={{ width: "100%", height: "100%" }}>
          {title ? (
            <CardContent>
              <Typography variant="subtitle1" textAlign="center">
                {title}
              </Typography>
            </CardContent>
          ) : (
            <CardMedia
              component="img"
              alt="google plus"
              image={image}
              width="100%"
              height="100%"
              sx={{ objectFit: "scale-down" }}
            />
          )}
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default FormCard;
