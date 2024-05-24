import EventIcon from "@mui/icons-material/Event";
import ClearIcon from "@mui/icons-material/Clear";
import ShortTextIcon from "@mui/icons-material/ShortText";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Tooltip,
} from "@mui/material";

import SelectedQuestion from "./SelectedQuestion";

const QuestionCard = ({
  handleDeleteQuestion,
  handleDuplicateQuestion,
  id,
  sideShadow,
  handleActive,
  isActive,
  isRequired,
  handleRequired,
  field,
  handleQuestions,
  handleOptions,
  handleAddOption,
  handleDeleteOption,
  handleOnSelect,
}) => {
  return (
    <Card
      component="div"
      sx={{ width: "50em", borderRadius: "0.5em" }}
      style={isActive ? { ...sideShadow } : undefined}
      onClick={() => handleActive(id)}
    >
      <CardContent sx={{ mt: 1, ml: 1, mr: 1 }}>
        <Stack direction="row" alignItems="center" spacing={4} mb="0.5em">
          <TextField
            required={field.isRequired}
            label=" "
            fullWidth
            placeholder="Question"
            variant="standard"
            value={field.question}
            onChange={(event) => handleQuestions(event, field.id, field.type)}
          />
          <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              displayEmpty
              onChange={(event) => handleOnSelect(event, field.id)}
              value={field.type}
              inputProps={{ "aria-label": "Without label" }}
              defaultValue
            >
              <MenuItem value={"text"}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ShortTextIcon color="action" />
                  <Box>Short answer</Box>
                </Stack>
              </MenuItem>
              <MenuItem value={"date"}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <EventIcon color="action" />
                  <Box>Date</Box>
                </Stack>
              </MenuItem>
              <MenuItem value={"select"}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ArrowDropDownCircleIcon color="action" />
                  <Box>Drop-down</Box>
                </Stack>
              </MenuItem>
              <MenuItem value={"radio"}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <RadioButtonCheckedIcon color="action" />
                  <Box>Radio</Box>
                </Stack>
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
        {field.type === "select" || field.type === "radio" ? (
          <Stack spacing={2}>
            {field.options.map((option, index) => {
              return (
                <Stack direction="row" key={option.id}>
                  <SelectedQuestion
                    type={field.type}
                    option={option}
                    handleOptions={handleOptions}
                    field={field}
                    number={index + 1}
                  />
                  <Tooltip title="Remove">
                    <IconButton
                      onClick={(event) =>
                        handleDeleteOption(event, field.id, option.id)
                      }
                      disabled={field.options.length === 1}
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              );
            })}
            <Box>
              <Button
                sx={{ textTransform: "none" }}
                onClick={(event) => handleAddOption(event, field.id)}
              >
                Add option
              </Button>
            </Box>
          </Stack>
        ) : (
          <SelectedQuestion type={field.type} />
        )}

        <Divider sx={{ mt: "2em", mb: "0.5em" }} />
        <Stack direction="row" justifyContent="end" spacing={2}>
          <Tooltip title="Duplicate">
            <IconButton onClick={() => handleDuplicateQuestion(id)}>
              <ContentCopyRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteQuestion(id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="middle" flexItem />
          <FormControlLabel
            value="required"
            control={
              <Switch
                onChange={() => handleRequired(id)}
                checked={isRequired}
              />
            }
            label="Required"
            labelPlacement="start"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
