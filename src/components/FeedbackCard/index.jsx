import React from 'react';
import { useEffect, useState } from 'react';

import { useUser } from '../../state/user/hook';

import ContentsApi from '../../api/contents';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
const FeedbackCard = ({ likes, blogid }) => {
  const [isLike, setisLike] = useState(false);
  const [postLikes, setPostLikes] = useState(0);
  const [contentId, setContentId] = useState();
  const { user } = useUser();

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
      } catch (err) {}
    }
  };

  // const handleDelete = async () => {
  //   if (user.role === 'admin') {
  //     try {
  //       await ContentsApi.delete({ id: contentId });
  //       navigate(`/`);
  //     } catch (err) {}
  //   } else {
  //     toast.error('ไม่สามารถลบได้');
  //   }
  // };

  useEffect(() => {
    setContentId(blogid);
    setPostLikes(likes.length);
    checkisLike();
  }, []);

  return (
    <div className="flex items-center text-red-600 transition font-bold ease-in duration-200 text-xl">
      <button onClick={isLike ? handleunlike : handlelike}>
        {isLike ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
      <p>{postLikes}</p>
    </div>
  );
};

export default FeedbackCard;
