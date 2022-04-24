import React from 'react';
import { useEffect, useState } from 'react';

import { useUser } from '../../state/user/hook';

import ContentsApi from '../../api/contents';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const FeedbackCard = ({ likes, blogid }) => {
  const [isLike, setisLike] = useState(false);
  const [postLikes, setPostLikes] = useState(0);
  const [contentId, setContentId] = useState();
  const { user } = useUser();

  let navigate = useNavigate();

  const cssClass =
  'text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none';


  const checkisLike = () => {
    likes.forEach((like) => {
      if (user.id === like.id) {
        setisLike(true);
      }
    });
  };

  const handlelike = async () => {
    if (isLike === false) {
      try {
        await ContentsApi.like({ id: contentId });

        console.log('like สำเร็จ');
        setPostLikes(postLikes + 1);
        setisLike(true);
      } catch (err) {}
    }
  };

  const handleunlike = async () => {
    if (isLike === true) {
      try {
        await ContentsApi.unlike({ id: contentId });
        setPostLikes(postLikes - 1);
        setisLike(false);
        console.log('unlike สำเร็จ');
      } catch (err) {}
    }
  };

  const handleDelete = async () => {
    if (user.role === 'admin') {
      try {
        await ContentsApi.delete({ id: contentId });
        navigate(`/`);
      } catch (err) {}
    } else {
      toast.error('ไม่สามารถลบได้');
    }
  };

  useEffect(() => {
    setContentId(blogid);
    setPostLikes(likes.length);
    checkisLike();
  }, []);

  return (
      <div className="w-1/4 p-2 rounded-lg bg-slate-100 mx-8 mb-4 ">
        <div className="flex flex-col gap-1 px-3 py-1">
          <button
            onClick={handleDelete}
            className={user.role === 'admin' ? `${cssClass}` : `hidden`}  
          >
            delete
          </button>

          <button
            onClick={isLike ? handleunlike : handlelike}
            className="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            {postLikes}
            <svg
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              className="w-6 h-6 inline-block mr-1"
            >
              <path
                fill="#FFFFFF"
                d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
                                    c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"
              />
            </svg>
          </button>
        </div>
      </div>
  );
};

export default FeedbackCard;
