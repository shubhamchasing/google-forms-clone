import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  Toolbar,
} from "@mui/material";

import * as Api from "../service/Api";
import * as action from "../store/actions/actions";
import { ReactComponent as FormIcon } from "../assets/images/Form.svg";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (data) => dispatch(action.getUsers(data)),
  };
};

function Navbar({ getUsers, users }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    Api.getUsers().then((data) => {
      getUsers(data);
    });
    if (userId) {
      setUser(userId);
    } else {
      setUser("");
    }
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnSelect = (event) => {
    let id = event.target.value;
    setUser(id);
    if (id === "") {
      navigate("/");
    } else {
      navigate(`user/${id}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{ backgroundColor: "#ffffff" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <SvgIcon
              component={FormIcon}
              inheritViewBox
              sx={{ fontSize: "2rem" }}
            />

            <Button
              onClick={handleOnSelect}
              value={""}
              sx={{
                fontSize: "1.2rem",
                flexGrow: 1,
                color: "#5f6871",
                display: { xs: "none", sm: "block" },
              }}
            >
              Forms
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={handleOnSelect}
              value={""}
              sx={{ color: "#5f6871" }}
            >
              Admin
            </Button>
            <FormControl sx={{ m: 1, width: 150 }} size="small">
              <InputLabel id="demo-select-small">Users</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={user}
                label="user"
                onChange={handleOnSelect}
                autoWidth
              >
                {users.map((userObj) => {
                  return (
                    <MenuItem key={userObj.id} value={userObj.id}>
                      {userObj.user_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
