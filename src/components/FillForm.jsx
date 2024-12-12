import { useEffect, useState } from "react";

import dayjs from "dayjs";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import * as Api from "../service/Api";
import AnswerCard from "./AnswerCard";
import { topShadow } from "../assets/style/style";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const FillForm = ({ user }) => {
  const { formId, userId } = useParams();
  const navigate = useNavigate();
  dayjs.extend(customParseFormat);

  const [form, setForm] = useState(
    user.filter((data) => data.form_id.toString() === formId)[0]
  );

  useEffect(() => {
    if (form === undefined) {
      navigate(`/user/${userId}`);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnChange = (value, id) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        prevForm: prevForm.form_fields.map((field) => {
          if (field.id === id) {
            field.response = value;
          }
          return field;
        }),
      };
    });
  };

  const handleOnsubmit = (event) => {
    let data = {
      ...form,
      user_id: userId,
      form_fields_with_response: form.form_fields,
    };
    Api.submitForm(data).then((res) => {});
    navigate(`submitPage`);
    event.preventDefault();
  };

  return form === undefined ? null : (
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
        }}
        style={topShadow}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
        >
          <Typography variant="h4">{form.form_name}</Typography>
          <Typography variant="body2">{form.form_description}</Typography>
          <Divider></Divider>
          <Typography color="error">*Required</Typography>
        </CardContent>
      </Card>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleOnsubmit}
        spacing={2}
      >
        {form.form_fields.map((field) => {
          return (
            <AnswerCard key={field.id} field={field}>
              {field.type === "text" && (
                <TextField
                  required={field.isRequired}
                  sx={{ width: "50%" }}
                  variant="standard"
                  value={field.response}
                  onChange={(event) =>
                    handleOnChange(event.target.value, field.id)
                  }
                ></TextField>
              )}
              {field.type === "select" && (
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel>Choose</InputLabel>
                  <Select
                    required={field.isRequired}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={field.response}
                    label="Choose"
                    onChange={(event) =>
                      handleOnChange(event.target.value, field.id)
                    }
                  >
                    {field.options.map((option) => {
                      return (
                        <MenuItem key={option.id} value={option.value}>
                          {option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              )}
              {field.type === "radio" && (
                <FormControl>
                  <RadioGroup
                    value={field.response}
                    onChange={(event) =>
                      handleOnChange(event.target.value, field.id)
                    }
                  >
                    {field.options.map((option) => {
                      return (
                        <FormControlLabel
                          key={option.id}
                          value={option.value}
                          control={<Radio required={field.isRequired} />}
                          label={option.value}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              )}
              {field.type === "date" && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    error
                    inputFormat="DD/MM/YYYY"
                    label="dd/mm/yyyy"
                    value={
                      field.response === ""
                        ? null
                        : dayjs(field.response, "DD/MM/YYYY")
                    }
                    onChange={(newDate) => {
                      let strFormat = newDate.format();
                      let year = strFormat.slice(0, 4);
                      let month = strFormat.slice(5, 7);
                      let day = strFormat.slice(8, 10);
                      let date = `${day}/${month}/${year}`;
                      handleOnChange(date, field.id);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} required={field.isRequired} />
                    )}
                  />
                </LocalizationProvider>
              )}
            </AnswerCard>
          );
        })}
        <Box>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default connect(mapStateToProps)(FillForm);
