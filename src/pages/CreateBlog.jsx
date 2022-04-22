import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import axios from "axios";

function CreateBlog() {
  const [content, setContent] = useState(``);
  const [title, setTitle] = useState(``);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const payload = {
      content,
      title,
      date,
    };

    console.log("submit value", payload);

    axios
      .post(
        "https://161.246.6.18:8880/api/Contents",
        {
          title: payload.title,
          contentMarkdown: payload.content,
          createDate: payload.date,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Accept": "text/plain",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex">
        {/* Writing Area */}
        <div className="flex-1 bg-teal-400 px-4">
          {/* Header */}
          <div className="text-center">Write Your Blog Here!</div>

          {/* Form */}
          <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
              {/* Title  Area */}
              <div className="flex py-3">
                <div className="float-left w-1/5">
                  <label>Title</label>
                </div>
                <div className="float-left w-4/5">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full border-2 rounded-md h-[40px]"
                    placeholder="Your Topic.."
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
              </div>
              {/* Content Area */}
              <div className="flex py-3">
                <div className="float-left w-1/5">
                  <label>Content</label>
                </div>
                <div className="float-left w-4/5 ">
                  <textarea
                    id="content"
                    name="content"
                    className="w-full border-2 resize-none rounded-md h-[725px] "
                    placeholder="Write something.."
                    onChange={(event) => setContent(event.target.value)}
                    defaultValue={content}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="py-3 float-right">
                <input
                  type="submit"
                  className="border-2 rounded-md bg-white px-4"
                  value="Post!"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Preview Area */}
        <div className="flex-1">
          <div className="text-center">This is Preview</div>
          <div className="">
            <ReactMarkdown
              children={content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateBlog;
