import { client } from '@/sanity/lib/client';
import Header from '@/components/header';
import { Post } from '@/utils/interface';
import PostComponent from '@/components/post-component';

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, 'posts');

  return (
    <main>
      <Header title='Articles' />
      <div className='space-y-8 flex flex-col'>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </main>
  );
}
