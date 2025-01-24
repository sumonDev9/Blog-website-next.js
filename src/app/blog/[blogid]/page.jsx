
import React from 'react';

const BlogDetails = async ({ params }) => {
  const { blogid } = params; 
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogid}`);

  if (!data.ok) {
    return <div>Error: Data not found</div>;
  }

  const post = await data.json();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 p-6">{post.title}</h1>

      {/* Body */}
      <div className="p-6 space-y-4">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{post.body}</p>
      </div>

      {/* Footer (optional) */}
      <div className="px-6 py-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">Posted on {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  </div>
  );
};

export default BlogDetails;


