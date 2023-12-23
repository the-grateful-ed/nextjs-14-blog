import React from 'react';
import Header from '@/components/Header';
import { Post } from '@/utils/interface';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { VT323 } from 'next/font/google';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
const dateFont = VT323({ weight: '400', subsets: ['latin'] });

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const BlogPost = async ({ params }: Params) => {
  console.log(params, 'parmas');
  const post: Post = await getPost(params?.slug);
  console.log(post, 'post');

  if (!post) {
    notFound();
  }
  return (
    <article
      className='px-4 py-24 mx-auto max-w-full'
      itemid='#'
      itemscope
      itemtype='http://schema.org/BlogPosting'
    >
      <div className='mx-auto mb-12 w-full text-left'>
        <img
          src='/brand/og.png'
          className='object-cover w-full h-64 bg-center rounded-lg'
          alt='Main Image'
        />
        <p className='mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary'>
          Development
        </p>
        <h1
          className='mb-3 text-3xl font-bold leading-tight text-foreground md:text-4xl'
          itemprop='headline'
          title={post?.title}
        >
          {post?.title}
        </h1>
        <div className='flex mb-6 space-x-2'>
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <Badge className='text-sm'>#{tag.name}</Badge>
            </Link>
          ))}
        </div>
        <a className='flex items-center text-gray-700' href='#'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='ml-2'>
            <p className='text-sm font-semibold text-gray-800'>Praveen Juge</p>
            <p className={`${dateFont?.className} text-purple-500`}>
              {new Date(post?.publishedAt).toDateString()}
            </p>
          </div>
        </a>
      </div>

      <div className='mx-auto w-full prose'>
        <div className={richTextStyles}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt='Post'
        width={700}
        height={700}
      />
    ),
  },
};

const richTextStyles = `
  mt-14
  text-justify
  max-w-2xl
  m-auto
  prose-headings:my-5
  prose-heading:text-2xl
  prose-p:mb-5
  prose-p:leading-7
  prose-li:list-disc
  prose-li:leading-7
  prose-li:ml-4
  `;
