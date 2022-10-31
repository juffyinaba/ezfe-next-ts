import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface PostListPageProps {
}

export default function PostListPage (props: PostListPageProps) {
  const router = useRouter();  
  
  function goToDetailPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 2,
        ref: 'Second'
      }
    })
  }

  return (
    <div> 
        <h1>Post List Page </h1>
    <ul>
        <li><Link href="/posts">Index Page 🔗</Link></li>
        <li><Link href="/posts/create">Named Route 🔗</Link></li>
        <li>Dynamic routes
            <ul>
                <li><Link href="/posts/1">Single Parameter 🔗</Link></li>
                <li><Link href="/posts/123/abc/xyz">Multiple Parameters 🔗</Link></li>
            </ul>
        </li>
        <li><button onClick={goToDetailPage}>Go to detail page id=2</button></li>
        
    </ul>
    </div>
  );
}
