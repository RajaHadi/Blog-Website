import Link from "next/link";
import { posts } from "./posts";
import Image from "next/image";

// Define types for posts
interface Post {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  image: string;  // Can either be URL or imported image
}

interface GroupedPosts {
  [key: string]: Post[]; // Categorized posts by string (category)
}

const HomePage = () => {
  // Group posts by category (Next.js and Other)
  const groupedPosts: any = posts.reduce((groups:GroupedPosts, post:any) => {
    const { category } = post;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(post);
    return groups;
  }, {});

  return (
    <div className="container mx-auto px-6">
      {/* Next.js Posts Section */}
      {groupedPosts["Next.js"] && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Next.js Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedPosts["Next.js"].map((post: Post) => (
              <div key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  height={400}
                  width={600}
                  src={post.image}  // Ensure this is a valid URL or imported image
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 hover:underline">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <small className="block text-gray-500 mb-4">{post.date}</small>
                  <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
                  <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline mt-4 block">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Posts Section */}
      {groupedPosts["Other"] && (
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Other Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedPosts["Other"].map((post: Post) => (
              <div key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  height={400}
                  width={600}
                  src={post.image}  // Ensure this is a valid URL or imported image
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 hover:underline">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <small className="block text-gray-500 mb-4">{post.date}</small>
                  <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
                  <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline mt-4 block">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
