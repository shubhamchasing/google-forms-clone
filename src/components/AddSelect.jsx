import { Stack, TextField, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const AddSelect = ({ option, handleOptions, field, number }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {field.type === "select" ? (
        <Typography>{number}</Typography>
      ) : (
        <RadioButtonUncheckedIcon color="disabled" />
      )}
      <TextField
        // placeholder={`Option${index + 1}`}
        variant="standard"
        fullWidth={false}
        value={option.value}
        onChange={(event) => handleOptions(event, field.id, option.id)}
        inputProps={{ sx: { fontSize: "11pt" } }}
      />
    </Stack>
  );
};

export default AddSelect;

// <Box sx={{ display: "flex", mt: 1, justifyContent: "start" }}>
// <Tooltip title="Add option">
//   <IconButton aria-label="add option" onClick={handleAddOption}>
//     <AddCircleOutlineIcon />
//   </IconButton>
// </Tooltip>
// </Box>

// <Stack direction="row" alignItems="center" spacing={2}>
//       <RadioButtonUncheckedIcon color="disabled" />
//       <TextField
//         // placeholder={`Option${index + 1}`}
//         variant="standard"
//         fullWidth={false}
//         value={option.value}
//         onChange={(event) => handleOptions(event,field.id, option.id)}
//       />
//     </Stack>
