import { useEffect } from "react";

import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Box, CircularProgress, Container, Stack } from "@mui/material";

import FormCard from "./Card";
import * as Api from "../Api";
import * as action from "../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => dispatch(action.getUser(data)),
  };
};

//const forms = ["Form1", "Form2", "Form3", "Form4", "Form5", "Form6"];

function User({ getUser, user }) {
  const { userId } = useParams();
  useEffect(() => {
    Api.getUser(userId).then((data) => {
      let newData = data.map((form) => {
        return {
          ...form,
          form_fields: form.form_fields.map((field) => {
            return { ...field, response: "" };
          }),
        };
      });
      getUser(newData);
    });
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps
  return user.length === 0 ? (
    <Stack alignItems="center" margin="5em">
      <CircularProgress />
    </Stack>
  ) : (
    <Box
      component="div"
      sx={{
        backgroundColor: "#f1f3f4",
        minHeight: "90vh",
        padding: "5em",
        marginTop: "3em",
      }}
    >
      <Container
        component="div"
        sx={{ display: "flex", flexWrap: "wrap", gap: "2em" }}
      >
        {user &&
          user.map((form, index) => {
            return (
              <Link
                to={`${form.form_id}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <FormCard title={form.form_name} />
              </Link>
            );
          })}
      </Container>
    </Box>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
