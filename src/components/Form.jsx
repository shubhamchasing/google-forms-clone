import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  TextField,
  Stack,
  Fab,
  Tooltip,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import QuestionCard from "./QuestionCard";
import Modal from "./Modal";

import { topShadow,bothShadow,sideShadow } from "../assets/style/style";

// const mapStateToProps = (state) => {
//   return {
//     forms: state.forms,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createForm: (data) => dispatch(action.createForm(data)),
//   };
// };

const Form = (forms) => {
  // console.log(forms)
  // const { id } = useParams();
  // const form = forms.filter((form) => form.id === id);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "",
      type: "text",
      options: [{ id: 1, value: "Option" }],
      isRequired: false,
    },
  ]);
  const [activeCard, setActiveCard] = useState(0);
  const [data, setData] = useState({
    form_name: "Untitled form",
    form_description: "",
  });
  const [userAssign, setUserAssign] = useState([]);

  const handleOnSelect = (event, id) => {
    let type = event.target.value;
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === id) field.type = type;
        return field;
      });
    });
  };

  const handleOnChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    console.log(value);
    setData((prevData) => {
      return { ...prevData, [id]: value };
    });
  };

  const handleQuestions = (event, id, type) => {
    console.log(event.target.value, id, type);
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === id) {
          field.question = event.target.value;
          field.type = type;
        }
        return field;
      });
    });
    console.log(questions);
  };

  const handleOptions = (event, questonId, optionId) => {
    let value = event.target.value;
    console.log(value, questonId, optionId);
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === questonId) {
          field.options.map((option) => {
            if (option.id === optionId) {
              option.value = value;
            }
            return option;
          });
        }
        return field;
      });
    });
  };

  const handleAddOption = (event, questionId) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === questionId) {
          let len = field.options.length;
          field.options = [
            ...field.options,
            { id: field.options[len - 1].id + 1, value: `Option` },
          ];
        }
        return field;
      });
    });
  };

  const handleDeleteOption = (event, questionId, optionId) => {
    console.log(questionId, optionId);
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === questionId) {
          let filteredOption = field.options.filter((f) => f.id !== optionId);
          field.options = [...filteredOption];
        }
        return field;
      });
    });
  };

  const handleAssignUsers = (event) => {
    let id = event.target.id;
    setUserAssign((assignedUsers) =>
      assignedUsers.includes(id)
        ? assignedUsers.filter((f) => f !== id)
        : [...assignedUsers, id]
    );
    console.log(userAssign);
  };

  const handleRequired = (id) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === id) {
          field.isRequired = !field.isRequired;
        }
        return field;
      });
    });
    console.log(questions);
  };

  const handleActive = (value) => {
    setActiveCard(value);
  };

  const handleAddQuestion = (event) => {
    setQuestions((prevQuestions) => {
      let questionId =
        prevQuestions.length === 0
          ? 1
          : prevQuestions[prevQuestions.length - 1].id + 1;

      let newQuestion = {
        id: questionId,
        question: "",
        type: "text",
        options: [{ id: 1, value: "Option" }],
        isRequired: false,
      };

      setActiveCard(questionId);
      return [...prevQuestions, newQuestion];
    });
  };

  const handleDeleteQuestion = (id) => {
    const filteredQuestions = questions.filter((item) => item.id !== id);
    setQuestions(filteredQuestions);
    // setActiveHeader(true);
    // setActiveCard(activeCard => activeCard-1)
  };

  const handleDuplicateQuestion = (id) => {
    const duplicateQuestion = questions.filter((item) => item.id === id)[0];
    console.log(duplicateQuestion);
    let newId = questions[questions.length - 1].id + 1;
    setQuestions((prevQuestions) => {
      return [
        ...prevQuestions,
        {
          ...duplicateQuestion,
          options: [
            ...duplicateQuestion.options.map((option) => ({ ...option })),
          ],
          id: newId,
        },
      ];
    });
    // setActiveCard((oldId) => {
    //   console.log(oldId);
    //   return newId;
    // });
    // console.log(questions);
  };

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
        gap: "2em",
        marginTop:'3em'
      }}
    >
      <Card
        component="div"
        sx={{
          width: "50em",
          borderRadius: "0.5em",

          padding: "0.5em",
        }}
        style={activeCard === 0 ? { ...bothShadow } : { ...topShadow }}
        onClick={() => handleActive(0)}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
        >
          <TextField
            fullWidth
            value={data.form_name}
            onChange={handleOnChange}
            id="form_name"
            placeholder="Untitled form"
            variant="standard"
            autoFocus
            inputProps={{ sx: { fontWeight: "400", fontSize: "24pt" } }}
          />
          <TextField
            fullWidth
            value={data.form_description}
            onChange={handleOnChange}
            id="form_description"
            placeholder="Form discription"
            variant="standard"
            inputProps={{ sx: { fontSize: "11pt" } }}
          />
        </CardContent>
      </Card>
      {questions &&
        questions.map((field, index) => {
          //console.log(typeof question.id);
          //console.log(typeof activeCard);
          return (
            <QuestionCard
              key={field.id}
              id={field.id}
              handleDeleteQuestion={handleDeleteQuestion}
              handleDuplicateQuestion={handleDuplicateQuestion}
              sideShadow={sideShadow}
              isActive={activeCard === field.id}
              handleActive={handleActive}
              isRequired={field.isRequired}
              handleRequired={handleRequired}
              field={field}
              handleQuestions={handleQuestions}
              handleOptions={handleOptions}
              handleAddOption={handleAddOption}
              handleDeleteOption={handleDeleteOption}
              handleOnSelect={handleOnSelect}
            />
          );
        })}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="50em"
      >
        <Tooltip title="Add question">
          <Fab
            disableFocusRipple={true}
            sx={{ backgroundColor: "white", color: "#5f6368" }}
            size="medium"
            aria-label="add question"
            onClick={handleAddQuestion}
          >
            <AddCircleOutlineIcon />
          </Fab>
        </Tooltip>

        <Modal
          data={data}
          questions={questions}
          userAssign={userAssign}
          handleAssignUsers={handleAssignUsers}
        />
      </Stack>
    </Box>
  );
};

export default Form;

// webkitBoxShadow: inset 0px 8px 0px 0px rgba(105,83,183,1),
// mozBoxShadow: inset 0px 8px 0px 0px rgba(105,83,183,1),
// boxShadow: inset 0px 8px 0px 0px rgba(105,83,183,1),

// webkitBoxShadow: "inset 7px 0px 0px 0px rgba(66,133,244,1)",
// mozBoxShadow: "inset 7px 0px 0px 0px rgba(66,133,244,1)",
// boxShadow: "inset 7px 0px 0px 0px rgba(66,133,244,1)",

// {icons.map((icon,index) => {
//   return (<IconButton
//     key = {index}
//     aria-label="add text"
//     onClick={handleAddQuestion}
//     value={"text"}
//   >{icon}</IconButton>)
// })}

// <Stack direction="row" spacing={1}>
//           <IconButton
//             aria-label="add text"
//             onClick={handleAddQuestion}
//             value={"text"}
//           >
//             <ShortTextIcon />
//           </IconButton>
//           <IconButton
//             aria-label="add date"
//             onClick={handleAddQuestion}
//             value={"date"}
//           >
//             <EventIcon />
//           </IconButton>
//           <IconButton
//             aria-label="add select"
//             onClick={handleAddQuestion}
//             value={"select"}
//           >
//             <ArrowDropDownCircleIcon />
//           </IconButton>
//           <IconButton
//             aria-label="add radio"
//             onClick={handleAddQuestion}
//             value={"radio"}
//           >
//             <RadioButtonCheckedIcon />
//           </IconButton>
//         </Stack>

// <Fab
//           disableFocusRipple={true}
//           sx={{ backgroundColor: "white" }}
//           size="medium"
//           variant="extended"
//           aria-label="add question"
//           onClick={handleAddQuestion}
//         >
//           <AddCircleOutlineIcon sx={{ mr: 1 }} />
//           Add Question
//         </Fab>

// {/* <Stack direction="row" alignItems="center" spacing={1}> */}
//   {/*
//   <Button
//     variant="contained"
//     startIcon={<AddCircleOutlineIcon />}
//     onClick={handleAddQuestion}
//     sx={{ backgroundColor: "white", color: "#5f6368" }}
//   >
//     Add Question
//   </Button> */}
// {/* </Stack> */}
