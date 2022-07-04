import { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditModal = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = props.openOn;

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h5">
            {props.editThis} Post title
          </Typography>
          <br />
          <Typography id="modal-description">What is this.?</Typography>
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              alert("Submitted");
              handleClose();
            }}
          >
            Submit
          </Button>

          <Button
            variant="outlined"
            style={{ marginLeft: "0.5em" }}
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
