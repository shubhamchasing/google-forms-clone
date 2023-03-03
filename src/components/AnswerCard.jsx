import { Card, CardContent, Typography ,Stack } from "@mui/material";

const AnswerCard = ({ field, children }) => {
  return (
    <Card
      sx={{
        width: "40em",
        borderRadius: "0.5em",
        padding: "0.5em",
      }}
    >
      <CardContent >
        <Stack direction='row' spacing={1}>

        <Typography sx ={{mb:'1em'}}>{field.question}</Typography>
        {field.isRequired && <Typography color='error'>*</Typography>}
        </Stack>
        {children}
      </CardContent>
    </Card>
  );
};

export default AnswerCard;
