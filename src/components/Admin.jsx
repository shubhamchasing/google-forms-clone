import {
  Container,
  Box,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";

import FormCard from "./Card";

import * as Api from "../service/Api";
import { connect } from "react-redux";
import * as action from "../store/actions/actions";
import { useEffect, useState } from "react";
import CircularLoader from "./Loader";

const mapStateToProps = (state) => {
  return {
    forms: state.forms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getForms: (data) => dispatch(action.getForms(data)),
  };
};

function Admin({ forms, getForms }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.getForms().then((data) => {
      getForms(data);
    }).catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    throw error
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
        <Tooltip title="Create form">
          <Link to={"/form"}>
            <FormCard
              image={
                "https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
              }
            />
          </Link>
        </Tooltip>
        {forms &&
          forms.map((form, index) => {
            return (
              <Link
                to={`/form/${form.form_id}`}
                key={form.form_id}
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
