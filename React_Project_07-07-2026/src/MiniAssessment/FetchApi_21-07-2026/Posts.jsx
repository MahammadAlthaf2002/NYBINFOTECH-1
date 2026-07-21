import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading Posts...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Posts</h1>

      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid blue",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;