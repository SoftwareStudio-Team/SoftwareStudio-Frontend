import React from 'react';
import '../pages/Blog';
import { useEffect, useState } from 'react';
import CommentsApi from '../api/comments';
import AccountsApi from '../api/accounts';
import { NavLink, useParams } from 'react-router-dom';
import { useUser } from '../state/user/hook';
import { toast } from 'react-toastify';

const CommentCard = ({ comment, index }) => {
  const { user } = useUser();
  const [commentId, setCommentId] = useState('');
  const [commentuserid, setCommentuserId] = useState('');
  const [usercomId, setUsercomId] = useState('');
  const [likecomment, setlikecomment] = useState(0);
  const [islike, setIslike] = useState(false);
  useEffect(() => {
    setCommentId(comment.id.toString());
    setCommentuserId(comment.owner.id.toString());
    pushcomment();
  }, []);
  const pushcomment = async () => {
    try {
      const { data } = await CommentsApi.getById({ id: commentId });
      setlikecomment(data[index].likes.length);
      data[index].likes.forEach((userlike) => {
        if (user.id === userlike.id) {
          return setIslike(true);
        }
      });
    } catch (err) {}
  };

  const handlelike = async () => {
    if (islike === false) {
      try {
        await CommentsApi.like({ id: commentId });

        setlikecomment(likecomment + 1);
        setIslike(true);
      } catch (err) {}
    }
  };

  const handleunlike = async () => {
    if (islike === true) {
      try {
        await CommentsApi.unlike({ id: commentId });
        setlikecomment(likecomment - 1);
        setIslike(false);
      } catch (err) {}
    }
  };
  const deletepost = async () => {
    if (commentuserid === user.id || user.role === 'admin') {
      try {
        await CommentsApi.delete({ id: commentId });
        window.location.reload();
      } catch (err) {}
    } else {
      toast.error('ไม่สามารถลบได้');
    }
  };
  
  const blockUser = async () => {
    if (user.role === 'admin') {
      try {
        await AccountsApi.ban({ id: comment.owner.id });
        window.location.reload();
      } catch (err) {}
    } else {
      toast.error('ไม่สามารถลบได้');
    }
  };
  return (
    <div className="flex flex-col w-full h-full bg-white max-w-full rounded-2xl px-10 py-8 mt-5 shadow-lg hover:shadow-2xl transition duration-500">
      <div className="flex flex-row justify-between">
        <p className="mt-4 text-md text-gray-600">{comment.commentMessage}</p>
        {/* Delete Btn */}

        <div className="items-end">
          <button
            className="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            onClick={deletepost}
          >
            delete
          </button>
          <button
            className="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            onClick={blockUser}
          >
            block
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-4 flex items-center space-x-4 py-6">
          <div className="text-sm font-semibold">
            {comment.owner.username}{' '}
            <span className="font-normal">
              {' '}
              {comment.createDate.substring(0, 10)}
            </span>
          </div>
        </div>
        <div className="">
          <button
            className="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            onClick={islike ? handleunlike : handlelike}
          >
            {likecomment}
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
    </div>
  );
};
export default CommentCard;
