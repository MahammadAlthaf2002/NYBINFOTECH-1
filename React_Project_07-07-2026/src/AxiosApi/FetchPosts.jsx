import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchPosts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {

    try {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);

    } catch (err) {

      setError("Failed to Fetch Posts");

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>

      <h1>Posts List</h1>

      {
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid blue",
              padding: "10px",
              margin: "10px",
              borderRadius: "8px"
            }}
          >
            <h3>{post.title}</h3>

            <p>{post.body}</p>

          </div>
        ))
      }

    </div>
  );
};

export default FetchPosts;