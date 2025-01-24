

export default async function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  console.log(posts)
  return (
<>
<p className="text-3xl text-red-600">this is home page{posts.length}</p>
</>
        
        
    
  );
}
