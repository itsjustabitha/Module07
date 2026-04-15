'use client'

import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Client component allowing user to choose the number of posts displayed
// and set new value in search params
export default function PostsLimit({defaultLimit}) {
  const searchParams = useSearchParams(); // next.js hook for search params;
  const router = useRouter(); // next.js hook for client side navigation
  const pathname = usePathname(); // next.js hook for current URL path
 
  // const limit = searchParams.get("limit") ?? String(defaultLimit);
  const limit = searchParams.has('limit') ? 
  searchParams.get('limit') : defaultLimit;
  
const handleChangeLimit = (e) => {
const params = new URLSearchParams(searchParams.toString());
params.set("limit", e.target.value);
    router.replace(pathname + "?limit=" + e.target.value);
  };

  return (
    <label className="PostsLimit"> Number of posts:
      <select onChange={handleChangeLimit} value={limit}>
        <option>5</option> <option>10</option> <option>20</option>
      </select>
    </label>
  );
}

// See next slide for changes to server-side Posts component
