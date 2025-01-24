import Link from "next/link";



export default async function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  console.log(posts)
  return (
    
<>
<div className="w-11/12 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {
    posts.map(post => (
      <div key={post.id} className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
  <div className="card-body space-y-4 p-6">
    {/* Post Title */}
    <h2 className="card-title text-xl font-bold text-gray-800">
      {post.title}
    </h2>

    {/* Post Body with Sliced Content */}
    <p className="text-gray-600">
      {post.body.slice(0, 70)}...
    </p>

    {/* View Details Button */}
    <div className="card-actions justify-start">
     <Link href={`/blog/${post.id}`}>
     <button className="px-4 py-2 font-semibold rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300">
        View Details
      </button>
     </Link>
    </div>
  </div>
</div>

    ))
  }
</div>
</>
        
        
    
  );
}
