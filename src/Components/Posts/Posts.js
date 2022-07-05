import { Fragment, useEffect, useState } from "react";
import EditModal from "../Ui/EditModal";
import Pagination from "../Ui/Pagination";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

function Posts() {
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [posts, setPosts] = useState([]);
  const [editPostDetails, setEditPostDetails] = useState("");

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // useEffect
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setTimeout(setPosts(data), 2000);
      setLoading(false);
    };

    getPosts();
  }, []);

  // if loading
  if (loading) {
    return (
      <div
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        align="center"
      >
        <Box sx={{ width: "50%" }}>
          <CircularProgress />
        </Box>
        .
      </div>
    );
  }

  // form visibility handler
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  // paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addNewPostHandler = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <Fragment>
      {/* navbar */}
      <div
        style={{
          margin: "0.3rem",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Stack spacing={2}>
          <Button variant="contained" color="primary" onClick={handleOpenForm}>
            {!openForm ? `Add Post` : `Close`}
          </Button>
        </Stack>
      </div>

      {/* post title */}
      <Card>
        <CardContent style={{ display: "-ms-inline-flexbox" }}>
          <div>
            <Typography variant="h2" component="h2">
              Posts
            </Typography>
          </div>
          <div></div>
        </CardContent>
      </Card>

      <br />

      {/* pagination */}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

      <br />
      {/* post edit form */}
      {openForm && (
        <EditModal
          closeModal={setOpenForm}
          addNewPost={addNewPostHandler}
          postDetails={editPostDetails}
        />
      )}

      {/* post list */}
      {currentPosts.map((post) => (
        <Card key={post.id} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} variant="h4" gutterBottom>
              {post.id}. {post.title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              {post.body}
              <br />
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              type="submit"
              onClick={() => {
                setOpenForm(true);
                setEditPostDetails(post);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => {
                setPosts(posts.filter((p) => p.id !== post.id));
                alert(`Post  "${post.title}" deleted`);
              }}
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
