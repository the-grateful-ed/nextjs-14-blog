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
    <main className='bg-muted'>
      <Header title='Articles' />
      <h3 className='py-12 mx-10 text-3xl font-medium leading-tigh text-foreground'>
        Blog
      </h3>
      <div className='flex flex-col px-2 space-y-6'>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </main>
  );
}
