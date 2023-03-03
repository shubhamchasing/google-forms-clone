import dayjs from "dayjs";
import customParseFromat from "dayjs/plugin/customParseFormat";

import {
  Box,
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
  Button,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import * as Api from "../Api";

import { topShadow } from "../assets/style/style";
import AnswerCard from "./AnswerCard";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const FillForm = ({ user }) => {
  const { formId, userId } = useParams();
  const navigate = useNavigate();
  //console.log(typeof formId);
  //console.log(user);
  dayjs.extend(customParseFromat);
  // console.log(user.filter((data) => data.form_id.toString() === formId));

  const [form, setForm] = useState(
    user.filter((data) => data.form_id.toString() === formId)[0]
  );
  console.log(form);
  // console.log(form.form_fields.length)
  //   useEffect(() => {
  //     Api.getForm(formId).then((res) => {
  //       console.log(res);
  //       setForm(res);
  //     });
  //   }, []);

  // if(form === undefined) {
  // }

  useEffect(() => {
    if (form === undefined) {
      navigate(`/user/${userId}`);
    }
  }, []);

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
    console.log("gdgdgd");
    let data = {
      ...form,
      user_id: userId,
      form_fields_with_response: form.form_fields,
    };
    Api.submitForm(data).then((res) => {
      console.log(res);
    });
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
          // console.log(field);
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
                    //required={field.isRequired}
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
                    // required={field.isRequired}
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
          {/* <Link  to={``} style={{ textDecoration: "none" }}> */}
          <Button variant="contained" type="submit">
            Submit
          </Button>
          {/* </Link> */}
        </Box>
      </form>
    </Box>
  );
};

export default connect(mapStateToProps)(FillForm);

// <CardHeader title="Fill form"
// subheader="from description"
// ></CardHeader>

// const form = {
//   form_id: 49,
//   form_name: "Complete",
//   form_description: "Description",
//   form_fields: [
//     {
//       id: 1,
//       question: "What is your name",
//       type: "text",
//       options: [
//         {
//           id: 1,
//           value: "Option",
//         },
//       ],
//       isRequired: true,
//       response: "",
//     },
//     {
//       id: 2,
//       question: "DOB",
//       type: "date",
//       options: [
//         {
//           id: 1,
//           value: "Option",
//         },
//       ],
//       isRequired: true,
//       response: "",
//     },
//     {
//       id: 3,
//       question: "Department",
//       type: "select",
//       options: [
//         {
//           id: 1,
//           value: "Tech",
//         },
//         {
//           id: 2,
//           value: "Sales",
//         },
//         {
//           id: 3,
//           value: "HR",
//         },
//       ],
//       isRequired: true,
//       response: "",
//     },
//     {
//       id: 4,
//       question: "Ready to relocate?",
//       type: "radio",
//       options: [
//         {
//           id: 1,
//           value: "Yes",
//         },
//         {
//           id: 2,
//           value: "No",
//         },
//       ],
//       isRequired: false,
//       response: "",
//     },
//   ],
// };

// Object.keys(form).length === 0 ? (
//   <Stack alignItems="center" margin="5em">
//     <CircularProgress />
//   </Stack>
// ) :
