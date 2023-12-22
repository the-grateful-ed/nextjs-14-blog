import React from 'react';

import Header from '@/components/header';
import PostComponent from '@/components/post-component';

import { client } from '@/sanity/lib/client';
import { Post } from '@/utils/interface';

async function getPost() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPost();
  console.log(posts, 'posts');
  return (
    <main>
      <Header title='Articles' />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </main>
  );
}
