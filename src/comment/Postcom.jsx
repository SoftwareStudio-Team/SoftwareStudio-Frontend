import React from "react";
import { useUser } from "../state/user/hook";
import {useState} from "react";
import axios from "axios";
function Postcom(props){
    const { idpost } = props;
    const {user} =useUser();

    
    const [commentMessage, setCommentMessage] = useState("");
    const contentId="";
    const ownerId="";
    

    const [error, setError] = useState(false);

    
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        console.log(  commentMessage,
            contentId,
            ownerId,
            
            )
        try {
          const res = await axios.post("https://161.246.6.18:8880/api/Comments",{
                
            //ไม่แน่ใจบรรทัดนี้
          
            commentMessage:commentMessage,
            contentId:idpost,
            ownerId:user.id,
            
            
          },{ withCredentials: true,
            headers:{'Content-Type': 'application/json'}});
          console.log("commentสำเร็จ")
          
          res.data && window.location.reload();
          
        } catch (err) {
          setError(true);
        }
      };

    
    return(
        <div className="flex items-center justify-center shadow-lg  mx-8 mb-4 w-full">
        <form className="w-full bg-white rounded-lg px-4 pt-2" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment'  onChange={e=>setCommentMessage(e.target.value)} required></textarea>
                </div>
                <div className="w-full flex items-start md:w-full px-3">
                    <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                    <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                    </div>
                    <div className="-mr-1">
                    <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" />
                    </div>
                </div>
                </div>
            </form>
        </div>
        



    );
}
export default Postcom;