// src/app/posts/[slug]/page.js
import Image from "next/image";
import { posts } from "../../posts"; 
import dynamic from 'next/dynamic';

const CommentSection = dynamic(() => import('../../../components/CommentSection'), {
  ssr: false, 
});

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Post = ({ params }: any) => {
  const { slug } = params;

  // Debugging line: Check the slug passed via params
  console.log("Slug received:", slug);  // Add this to check the received slug

  // Find the post based on the slug
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <p className="text-red-500">Post not found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      {/* Image */}
      <Image
      height={2000}
      width={2000}
        src={post.image} 
        alt={post.title} 
        className="w-full h-64 object-cover mb-6 rounded-lg" 
      />
      
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <small className="block text-gray-500 mb-4">{post.date}</small>
      <p className="text-gray-700 mb-6">{post.content}</p>
      
      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default Post;


