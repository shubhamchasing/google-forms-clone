import { Stack, TextField } from "@mui/material";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const AddRadio = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <RadioButtonUncheckedIcon color="disabled" />
      <TextField variant="standard" fullWidth={false} disabled />
    </Stack>
  );
};

export default AddRadio;
