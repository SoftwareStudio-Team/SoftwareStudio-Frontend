import React, { useCallback } from "react";
import { useBlogState } from "../../state/BlogState/hook";
import axios from "axios";
const Editor = () => {
  const {
    title,
    content,
    reducers: { updateTitle, updateContent },
  } = useBlogState();

  const handleTitleChange = useCallback((e) => {
    updateTitle({ title: e.target.value });
  });
  // setBlogid({id: id})
  const handleContentChange = useCallback((e) => {
    updateContent({ content: e.target.value });
  });

  const publishBlog = useCallback(() => {
    console.log("Publish Blog");
    const date = new Date();
    // call api here
    axios
      .post(
        "https://161.246.6.18:8880/api/Contents",
        {
          title: title,
          contentMarkdown: content,
          createDate: date,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "text/plain",
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
  });

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <p className="text-stone-500">Title</p>
        <input
          className="shadow rounded-md appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your title."
          onChange={handleTitleChange}
          value={title}
        />
      </div>

      <div className="flex flex-col gap-2 h-1/2">
        <p className="text-stone-500">Content</p>
        <textarea
          className="h-full p-2 border-2 shadow rounded-md outline-none resize-none form-textarea"
          onChange={handleContentChange}
          placeholder="Enter your content."
          value={content}
        />
      </div>
      <div className="flex flex-row justify-center">
        <button
          className={
            "bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full md:w-32 h-12 ease-in-out duration-300"
          }
          onClick={publishBlog}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Editor;
