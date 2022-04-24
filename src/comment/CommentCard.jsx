import React from 'react';
import '../pages/Blog';
import { useEffect, useState } from 'react';
import CommentsApi from '../api/comments';
import AccountsApi from '../api/accounts';

import { useUser } from '../state/user/hook';
import { toast } from 'react-toastify';

import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdDeleteOutline,
} from 'react-icons/md';

import { HiEye, HiEyeOff, HiBan } from 'react-icons/hi';

const CommentCard = ({ comment, index }) => {
  const { user } = useUser();
  const [commentId, setCommentId] = useState('');
  const [commentuserid, setCommentuserId] = useState('');
  const [likecomment, setlikecomment] = useState(0);
  const [islike, setIslike] = useState(false);
  const [isHidden, setisHidden] = useState();
  const [isShow, setisShow] = useState();

  useEffect(() => {
    setCommentId(comment.id.toString());
    setCommentuserId(comment.owner.id);
    setisHidden(comment.isHid);
    pushcomment();
    setShowComment();
  }, []);

  const setShowComment = () => {
    if (comment.isHid == true && user.role === 'member') {
      setisShow(false);
    } else {
      setisShow(true);
    }
  };

  const pushcomment = async () => {
    try {
      const { data } = await CommentsApi.getById({ id: commentId });

      data.forEach((comments) => {
        if (comments.id === comment.id) {
          console.log(comments.likes)
          setlikecomment(comments.likes.length)
          comments.likes.forEach((userLike) => {
            if (user.id === userLike.id) {
              setIslike(true);
            }
          });
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

  const hideComment = async () => {
    if (user.role === 'admin') {
      try {
        await CommentsApi.hide({ id: commentId });
        window.location.reload();
      } catch (err) {}
    } else {
      toast.error('Faild');
    }
  };

  const unHideComment = async () => {
    if (user.role === 'admin') {
      try {
        await CommentsApi.unhide({ id: commentId });
        window.location.reload();
      } catch (err) {}
    } else {
      toast.error('Faild');
    }
  };

  return (
    <>
      {isShow && (
        <div
          className={`flex flex-col w-full h-full rounded border max-w-full mt-5 transition duration-500 p-3 space-y-4 ${
            isHidden && `opacity-50`
          }`}
        >
          <div className="flex flex-row justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-sm font-semibold">
                {comment.owner.username}{' '}
                <span className="font-normal">
                  {' '}
                  {comment.createDate.substring(0, 10)}
                </span>
              </div>
            </div>
            {/* Delete Btn */}
            <div className="flex flex-row justify-center items-center space-x-1">
              {user.role === 'admin' && (
                <button
                  className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                  onClick={isHidden ? unHideComment : hideComment}
                >
                  {isHidden ? <HiEyeOff /> : <HiEye />}
                </button>
              )}
              {user.role === 'admin' && comment.owner.id !== user.id && (
                <button
                  className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                  onClick={blockUser}
                >
                  <HiBan />
                </button>
              )}
              {(commentuserid == user.id || user.role === 'admin')&& (
                  <button
                    className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                    onClick={deletepost}
                  >
                    <MdDeleteOutline />
                  </button>
                )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-md text-gray-600">{comment.commentMessage}</p>
            <div className="flex items-center text-red-600 transition font-bold ease-in duration-200 text-xl">
              <button onClick={islike ? handleunlike : handlelike}>
                {islike ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
              </button>
              <p>{likecomment}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CommentCard;
