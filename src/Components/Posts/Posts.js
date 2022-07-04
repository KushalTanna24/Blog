import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Fragment, useCallback, useEffect, useState } from "react";

function Posts(props) {
  const [postData, setPostData] = useState([]);
  const [id, setId] = useState(null);
  const [clicked, setClicked] = useState(false);

  const postsFetchHandler = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPostData(data);
  }, []);

  useEffect(() => {
    postsFetchHandler();
  }, [postsFetchHandler]);

  const btnIdHandler = (event) => {
    event.preventDefault();
    props.whatId(event.target.offsetParent.id);
    setId(event.target.offsetParent.id);
    props.whatClicked(true);
  };

  return (
    <Fragment>
      {postData.map((post) => (
        <Card key={post.id} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} variant="h4" gutterBottom>
              {post.id}. {post.body}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              {post.body}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              id={post.id}
              variant="outlined"
              color="primary"
              size="small"
              onClick={btnIdHandler}
              type="submit"
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              id={post.id}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </Fragment>
  );
}

export default Posts;
