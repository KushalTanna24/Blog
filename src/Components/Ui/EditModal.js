import Button from "@mui/material/Button";

import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const EditModal = ({ closeModal }) => {
  const [newPost, setNewPost] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();

    setTitle("");
    setBody("");
  };

  const cancelHandler = () => {
    closeModal(false);
  };

  return (
    <form align="center" onSubmit={submitFormHandler}>
      <TextField
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "50%" }}
        fullWidth
        margin="dense"
        variant="outlined"
        label="Title"
      />
      <br />
      <TextField
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ width: "50%" }}
        margin="dense"
        multiline
        rows="7"
        variant="outlined"
        label="Body"
      />
      <br />
      <Button type="submit" variant="outlined" color="primary">
        Submit
      </Button>

      <Button
        variant="outlined"
        style={{ marginLeft: "0.5em", margin: "1rem" }}
        color="secondary"
        onClick={cancelHandler}
      >
        Cancel
      </Button>
    </form>
  );
};

export default EditModal;
