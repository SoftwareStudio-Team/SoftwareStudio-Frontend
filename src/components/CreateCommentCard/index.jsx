import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useUser } from '../../state/user/hook';

import CommentsApi from '../../api/comments';
import { useNavigate } from 'react-router-dom';

const CreateCommentCard = ({ idpost }) => {
  const navigate = useNavigate();

  const { user } = useUser();

  const [commentMessage, setCommentMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CommentsApi.create({
        commentMessage: commentMessage,
        contentId: idpost,
        ownerId: user.id,
      });

      navigate(0);
    } catch (err) {
      toast.error('Failed to comment');
    }
  };

  return (
    <div className="flex items-center justify-center border rounded-md w-full">
      <form
        className="w-full bg-white rounded-lg px-4 pt-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Add a new comment
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="rounded border leading-normal resize-none w-full h-20 py-2 px-3 focus:outline-none"
              name="body"
              placeholder="Type your comment"
              onChange={(e) => setCommentMessage(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex justify-end md:w-full px-3">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 rounded-md w-28 h-9 ease-in-out duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateCommentCard;
