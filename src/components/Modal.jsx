import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Checkbox,
  CircularProgress,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import * as Api from "../service/Api";
import { connect } from "react-redux";
import * as action from "../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createForm: (data) => dispatch(action.createForm(data)),
  };
};

const Modal = ({
  users,
  handleAssignUsers,
  data,
  questions,
  userAssign,
  createForm,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sendData = () => {
    let sendData = {
      ...data,
      form_fields: [...questions],
      users_assigned: [...userAssign.map(({ user_email }) => user_email)],
    };

    Api.createForm(sendData).then((res) => {
      createForm(res);
    });
  };

  return (
    <>
      <Button variant="contained" size="medium" onClick={handleClickOpen}>
        Done
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2em",
          }}
        >
          Assign form to the users
        </DialogTitle>

        <DialogContent dividers>
          {users.length === 0 ? (
            <Stack alignItems="center" margin="2em">
              <CircularProgress />
            </Stack>
          ) : (
            users.map((user) => {
              const isChecked = userAssign.some(
                ({ user_email }) => user_email === user.user_email
              );
              return (
                <Stack
                  key={user.id}
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  <Checkbox
                    checked={isChecked}
                    onChange={() => handleAssignUsers(user)}
                    id={user.user_email}
                  />
                  <Link>{user.user_email}</Link>
                </Stack>
              );
            })
          )}
        </DialogContent>
        <DialogActions>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button
              autoFocus
              variant="outlined"
              endIcon={<SendIcon />}
              onClick={sendData}
              size="small"
            >
              Send
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
