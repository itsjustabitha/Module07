import Link from "next/link";


// Save as app/posts/[id]/page.jsx
async function getPostData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {cache: "no-store"});  // Recommendation: handle errors
  if (!res.ok) {  // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + id);
  }
  return res.json();
}

// Uses params prop to get value of [id] from path segment
export default async function Posts({ params }) {
    const { id } = await params; // id is from the [id] in the file name, so for /posts/3/, id will be 3
                                // so for /posts/3/, params will be { id:3 }
    const post = await getPostData(id);
  
  return (
    <><div className="post">
        {post ?
        <><h3> Post #{post.id}: {post.title}</h3>
            <p>{post.body}</p></>
          :"Loading ..."}
      </div>
      <Link href="/posts">All Posts</Link></>
  )
} 
