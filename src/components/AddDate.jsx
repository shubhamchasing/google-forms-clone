import { Stack, TextField } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const AddDate = () => {
  return (
    <Stack direction="row" alignItems="center">
      <TextField disabled variant="standard" defaultValue="Day, month, year" />
      <EventIcon color="disabled" />
    </Stack>
  );
};

export default AddDate;
