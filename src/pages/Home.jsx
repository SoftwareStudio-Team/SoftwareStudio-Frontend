import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Blog/BlogCard"
function Home() {
  const [blog, setBlog] = useState({
    blog: [],
  });
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    axios.get("https://161.246.6.18:8880/api/Contents").then((resp) => {
      setBlog({ ...blog, blog: resp.data });
    }); 
  };

  return (
    <div>
      <div className="grid grid-cols-2 justify-items-center">
        {blog.blog.length === 0 ? (
          <div>Loading</div>
        ) : (
          blog.blog.map((blog) => {
            return <Card blog={blog}/>;
          })
        )}
      </div>
    </div>
  );
}
export default Home;
