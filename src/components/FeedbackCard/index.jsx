import React from 'react';
import { useEffect, useState } from 'react';

import { useUser } from '../../state/user/hook';

import ContentsApi from '../../api/contents';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { toast } from 'react-toastify';

const FeedbackCard = ({ likes, blogid }) => {
  const { user } = useUser();

  const [isLike, setisLike] = useState(
    !!likes.find((likedAccount) => likedAccount.id === user.id),
  );

  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = async () => {
    try {
      await ContentsApi.like({ id: blogid });
      
      const { data } = await ContentsApi.getById({ id: blogid });
      setisLike(!!data.likes.find((likedAccount) => likedAccount.id === user.id));
      setLikeCount(data.likes.length);
    } catch (err) {
      toast.error('Failed to like');
    }
  };

  const handleUnlike = async () => {
    try {
      await ContentsApi.unlike({ id: blogid });

      const { data } = await ContentsApi.getById({ id: blogid });
      setisLike(!!data.likes.find((likedAccount) => likedAccount.id === user.id));
      setLikeCount(data.likes.length);
    } catch (err) {
      toast.error('Failed to unlike');
    }
  };

  return (
    <div className="flex items-center text-red-600 transition font-bold ease-in duration-200 text-xl">
      <button onClick={isLike ? handleUnlike : handleLike}>
        {isLike ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
      <p>{likeCount}</p>
    </div>
  );
};

export default FeedbackCard;
