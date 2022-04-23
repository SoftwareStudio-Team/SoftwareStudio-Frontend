import React from 'react';

const FeedbackCard = () => {
  return (
    <div className="w-full p-2 rounded-lg bg-slate-100 mt-2">
      <div className="flex flex-col gap-1 px-3 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:bg-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default FeedbackCard;
