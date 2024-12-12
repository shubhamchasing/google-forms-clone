import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Box, Container } from "@mui/material";

import FormCard from "./Card";
import * as Api from "../service/Api";
import * as action from "../store/actions/actions";
import CircularLoader from "./Loader";

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

function User({ getUser, user }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userId } = useParams();
  useEffect(() => {
    Api.getUser(userId)
      .then((data) => {
        let newData = data.map((form) => {
          return {
            ...form,
            form_fields: form.form_fields.map((field) => {
              return { ...field, response: "" };
            }),
          };
        });
        getUser(newData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    throw error;
  }

  return loading ? (
    <CircularLoader />
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
