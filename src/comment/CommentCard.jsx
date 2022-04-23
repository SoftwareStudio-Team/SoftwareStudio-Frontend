import React from "react";
import "../pages/Blog"
import { useEffect,useState } from "react";

function CommentCard ({id}) {
 
   
    console.log(id,"commentcard")
  return (
    
    // <div key={index} class="flex flex-col w-full h-full bg-white max-w-full rounded-2xl px-10 py-8 m-10 shadow-lg hover:shadow-2xl transition duration-500">
      
      
    //     <p class="mt-4 text-md text-gray-600">{data.commentMessage}</p>
    //     <div class="flex justify-between items-center">
    //       <div class="mt-4 flex items-center space-x-4 py-6">
            
           
    //         <div class="text-sm font-semibold">{data.owner.username} <span class="font-normal"> {data.createDate}</span></div>
    //       </div>
    //       <div class="">
        
    //     <button
    //             class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
    //       <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block mr-1">
    //         <path fill="#FFFFFF" d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
    //                                 c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"/>
    //       </svg>
          
    //     </button>
    //   </div>
    //     </div>
    //   </div>
    <div >
      <h1>{comment.id}</h1>

    </div>
    );
}
export default CommentCard;
