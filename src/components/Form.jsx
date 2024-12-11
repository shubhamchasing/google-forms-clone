import { useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  Card,
  CardContent,
  Fab,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";

import Modal from "./Modal";
import QuestionCard from "./QuestionCard";
import { bothShadow, sideShadow, topShadow } from "../assets/style/style";

import * as Api from "../Api";
import { useEffect } from "react";
import { useParams } from "react-router";
import CircularLoader from "./Loader";

const Form = () => {
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      Api.getForm(id)
        .then((data) => {
          setQuestions(data.form_fields);
          setData({
            form_id: data.form_id,
            form_name: data.form_name,
            form_description: data.form_description,
          });
          setUserAssign(data.users_assigned);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
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
    form_id: null,
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
    setData((prevData) => {
      return { ...prevData, [id]: value };
    });
  };

  const handleQuestions = (event, id, type) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === id) {
          field.question = event.target.value;
          field.type = type;
        }
        return field;
      });
    });
  };

  const handleOptions = (event, questionId, optionId) => {
    let value = event.target.value;
    setQuestions((prevQuestions) => {
      return prevQuestions.map((field) => {
        if (field.id === questionId) {
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

  const handleAssignUsers = (user) => {
    setUserAssign((assignedUsers) => {
      const exists = assignedUsers.some(
        ({ user_email }) => user_email === user.user_email
      );
      return exists
        ? assignedUsers.filter(
            ({ user_email }) => user_email !== user.user_email
          )
        : [...assignedUsers, user];
    });
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
  };

  const handleDuplicateQuestion = (id) => {
    const duplicateQuestion = questions.filter((item) => item.id === id)[0];
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
        marginTop: "3em",
      }}
    >
      {loading && id !== undefined ? (
        <CircularLoader />
      ) : (
        <>
          {" "}
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
                placeholder="Form description"
                variant="standard"
                inputProps={{ sx: { fontSize: "11pt" } }}
              />
            </CardContent>
          </Card>
          {questions &&
            questions.map((field, index) => {
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
        </>
      )}
    </Box>
  );
};

export default Form;
