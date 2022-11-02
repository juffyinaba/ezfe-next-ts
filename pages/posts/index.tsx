import React from 'react'; 
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {
  // console.log(posts)

  return (
    <div>
      <h1>This is a place to get all post</h1>
      <ul>
        {/* {posts.map((post) => <li key={post.id}>{post.name}</li>)} */}
        {posts.map((post) => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.id}. {post.name} 🔗</Link></li>)}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server-side
  // - only run at built-time, production (yarn start)
  // - run each time code save, development (yarn dev)
  console.log('called getStaticProps')
  const response = await fetch('https://reqres.in/api/posts?per_page=12')
  const data = await response.json()
  // console.log(data.data)
  return {
    props: {
      posts: data.data,
    },
  }
}