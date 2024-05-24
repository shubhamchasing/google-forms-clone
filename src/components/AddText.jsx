import { TextField } from "@mui/material";

const AddText = () => {
  return (
    <TextField
      id="standard-basic"
      defaultValue="Short-answer text"
      variant="standard"
      disabled
      fullWidth={false}
    />
  );
};

export default AddText;
