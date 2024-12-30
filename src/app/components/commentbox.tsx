'use client'

import { useState } from "react";

const BlogCommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const deleteAllComments = () => {
    setComments([]);
  }

  return (
    <div className="bg-white p-8 max-w-2xl mx-auto rounded-lg shadow-xl mt-12">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Tell Us What You Think</h1>
      
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your thoughts here..."
        className="border border-gray-300 rounded-md w-full p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none transition duration-300 ease-in-out"
        rows={5}
      />

      <div className="flex justify-between items-center">
        <button
          onClick={addComment}
          className="bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
        >
          Post Comment
        </button>
        <button
          onClick={deleteAllComments}
          className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
        >
          Clear Comments
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center">No comments yet. Be the first to share your thoughts!</p>
        ) : (
          <ul className="list-inside list-disc space-y-4">
            {comments.map((cmt, index) => (
              <li key={index} className="text-gray-700 text-lg">{cmt}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogCommentBox;
