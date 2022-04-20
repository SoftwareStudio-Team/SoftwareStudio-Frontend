import React, { useState } from "react";

function CreateBlog() {
  const [content, setContent] = useState(`Boat
  Boat
  Boat`);
  const handleSubmit = () => {
    console.log("Posting Blog!");
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
                    className="w-full border-2 resize-none rounded-md h-[725px]"
                    placeholder="Write something.."
                    onChange={ (event) => setContent(event.target.value) }  
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
        <div className="flex-1 text-center">
          <div className="text-center">This is Preview</div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
export default CreateBlog;
