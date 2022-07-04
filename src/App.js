import { Fragment, useState } from "react";
import "./App.css";

import Posts from "./Components/Posts/Posts";
import EditModal from "./Components/Ui/EditModal";

function App() {
  const [idReceived, setIdReceived] = useState(undefined);
  const [clicked, setClicked] = useState(false);

  const idHandler = (id) => {
    setIdReceived(id);
  };
  const clickedHandler = () => {
    setClicked(true);
  };

  return (
    <Fragment>
      <EditModal editThis={idReceived} openOn={clicked} />
      <Posts whatId={idHandler} whatClicked={clickedHandler} />
    </Fragment>
  );
}

export default App;
