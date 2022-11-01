import React from 'react'; 
import { GetStaticProps, GetStaticPropsContext } from 'next';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {
  console.log(posts)

  return (
    <div>
      <h1>This is a place to get all post</h1>
      <ul>
        {posts.map((post) => <li key={post}>{post}</li>)}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server-side
  // - only run at built-time, production (yarn start)
  // - run each time code save, development (yarn dev)
  console.log('called getStaticProps')
  return {
    props: {
      posts: ['Python', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
    },
  }
}