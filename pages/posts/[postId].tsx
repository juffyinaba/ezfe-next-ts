import { useRouter } from "next/router";
import React from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';

export interface PostDetailPageProps {
    posts: any[]
}

export default function PostDetailPage({ posts }: PostDetailPageProps) {
    const router = useRouter();

    return <div>
        <h1>Post Detail Page</h1>
        <p>Query: {JSON.stringify(router.query)}</p>
        <code>
            {JSON.stringify(posts)}
        </code>
    </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://reqres.in/api/posts?per_page=12')
    const data = await response.json()
    
    return {
        paths: data.data.map((post: any) => ({ params: { postId: String(post.id) } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
    context: GetStaticPropsContext
) => {
    // server-side
    // - only run at built-time, production (yarn start)
    // - run each time code save, development (yarn dev)
    console.log('called getStaticProps: ', context.params?.postId)
    const postId = context.params?.postId
    if (!postId) return { notFound: true }
    const response = await fetch(`https://reqres.in/api/posts/${postId}`)
    const data = await response.json()

    return {
        props: {
            posts: data.data,
        },
    }
}