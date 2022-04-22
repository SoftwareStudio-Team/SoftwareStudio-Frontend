import React from "react";

function BlogCard() {

  return (
    <div className="flex flex-col w-4/5 border-2 rounded-md h-[100px] my-4">
        <div className="text-xl pt-2 pl-4">ไปดูธรรมมะกับลูกกลับหลาน นำทัวร์โดยอาจารย์แดง!</div>
        <div className="flex items-end h-full pb-2 pl-4 justify-between">
            <div className="">วันที่</div>
            <div className="flex justify-self-end gap-x-4">
                <div>Likes</div>
                <div className="pr-4">Comments</div>
            </div>
        </div>
    </div>
  );
}
export default BlogCard;
