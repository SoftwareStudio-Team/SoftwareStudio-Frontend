import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdDeleteOutline,
} from 'react-icons/md';
import { HiEye, HiEyeOff, HiBan } from 'react-icons/hi';

import CommentsApi from '../api/comments';
import AccountsApi from '../api/accounts';

import { useUser } from '../state/user/hook';

const CommentCard = ({ comment }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [commentData, setCommentData] = useState(comment);

  const [isLike, setIsLike] = useState(true);

  // const pushcomment = async () => {
  //   try {
  //     const { data } = await CommentsApi.getById({ id: comment.id });

  //     data.forEach((comments) => {
  //       if (comments.id === comment.id) {
  //         console.log(comments.likes);
  //         setlikecomment(comments.likes.length);
  //         comments.likes.forEach((userLike) => {
  //           if (user.id === userLike.id) {
  //             setIsLike(true);
  //           }
  //         });
  //       }
  //     });
  //   } catch (err) {}
  // };

  const fetchCommentData = async () => {
    const { data } = await CommentsApi.getById({ id: comment.id });
    setCommentData(data);
  };

  const handlelike = async () => {
    try {
      await CommentsApi.like({ id: comment.id });

      await await fetchCommentData();
    } catch (err) {}
  };

  const handleunlike = async () => {
    try {
      await CommentsApi.unlike({ id: comment.id });

      await fetchCommentData();
    } catch (err) {}
  };

  const deleteComment = async () => {
    try {
      await CommentsApi.delete({ id: comment.id });
      navigate(0);
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

  const blockUser = async () => {
    try {
      await AccountsApi.ban({ id: comment.owner.id });

      await fetchCommentData();
    } catch (err) {
      toast.error('Failed to ban');
    }
  };

  const hideComment = async () => {
    try {
      await CommentsApi.hide({ id: comment.id });

      await fetchCommentData();
    } catch (err) {
      toast.error('Failed to hide');
    }
  };

  const unHideComment = async () => {
    try {
      await CommentsApi.unhide({ id: comment.id });

      await fetchCommentData();
    } catch (err) {
      toast.error('Failed to hide');
    }
  };

  useEffect(() => {
    setIsLike(
      !!commentData.likes.find((likedAccount) => likedAccount.id === user.id),
    );
  }, [commentData]);

  // fix backend bug
  useEffect(() => {
    fetchCommentData();
  }, []);

  return (
    <>
      {(user.role === 'admin' || commentData.isHid == false) && (
        <div
          className={`flex flex-col w-full h-full rounded border max-w-full mt-5 transition duration-500 p-3 space-y-4 ${
            commentData.isHid && `opacity-50`
          }`}
        >
          <div className="flex flex-row justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-sm font-semibold">
                {commentData.owner != null ? (
                  <p>{commentData.owner.username}</p>
                ) : (
                  <p className="text-red-400">This user has gone</p>
                )}
                <span className="font-normal">
                  {' '}
                  {commentData.createDate.substring(0, 10)}
                </span>
              </div>
            </div>
            {/* Delete Btn */}
            <div className="flex flex-row justify-center items-center space-x-1">
              {user.role === 'admin' && (
                <button
                  className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                  onClick={commentData.isHid ? unHideComment : hideComment}
                >
                  {commentData.isHid ? <HiEyeOff /> : <HiEye />}
                </button>
              )}
              {user.role === 'admin' &&
                commentData.owner?.id !== user.id &&
                commentData.owner != null && (
                  <button
                    className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                    onClick={blockUser}
                  >
                    <HiBan />
                  </button>
                )}
              {(user.role === 'admin' || commentData.owner?.id == user.id) && (
                <button
                  className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                  onClick={deleteComment}
                >
                  <MdDeleteOutline />
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-md text-gray-600">
              {commentData.commentMessage}
            </p>
            <div
              className={`flex items-center text-red-600 transition font-bold ease-in duration-200 text-xl ${
                !commentData.owner && 'opacity-50'
              }`}
            >
              <button
                onClick={isLike ? handleunlike : handlelike}
                disabled={!commentData.owner}
              >
                {isLike ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
              </button>
              <p>{commentData.likes.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CommentCard;
