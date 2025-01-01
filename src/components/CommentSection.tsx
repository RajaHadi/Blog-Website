'use client'
import { useState } from 'react';

const CommentSection = () => {
  // Initialize comments state with type string[]
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      // Add new comment to the list
      setComments([...comments, commentText]);
      setCommentText(''); // Clear the input after submitting
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">Comments</h3>
      <div>
        <input
          type="text"
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className="border border-gray-300 p-2 mt-2 w-full"
        />
        <button
          onClick={handleCommentSubmit}
          className="bg-blue-500 text-white p-2 mt-2 rounded"
        >
          Submit
        </button>
      </div>

      <div className="mt-4">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul className="list-disc pl-6">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
