import { Lilita_One, VT323} from 'next/font/google'
import Link from 'next/link'
import React from 'react'

import { Post } from '../utils/interface'

interface Props {
  post: Post;
}

const font = Lilita_One({weight: "400", subsets: ["latin"]})
const dateFont = VT323({weight: "400", subsets: ["latin"]})

const PostComponent = ({post}: Props) => {
  return (
    // <div className={cardStyle}>
    //   <Link href={`/posts/${post?.slug?.current}`}>
    //     <h2 className={`${font.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
    //     <p className={`${dateFont.className} my-2 text-purple-800`}>{new Date(post?.publishedAt).toDateString()}</p>
    //     <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
    //   </Link>

    //   {/* TAGS */}

    //   <div>
    //     {post?.tags?.map((tag) => (
    //       <span key={tag?._id} className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>#{tag?.name}</span>
    //     ))}
    //   </div>
    // </div>
    <Link href={`/posts/${post?.slug?.current}`}>
    <div
  className="block w-full rounded-lg border border-primary bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border-primary dark:bg-neutral-600">
  <div
    className="border-b-2 border-[#0000002d] px-6 py-3 text-neutral-600 dark:text-neutral-50">
   {new Date(post?.publishedAt).toDateString()}
  </div>
  <div className="p-4">
    <h5
      className="font-rubik mb-2 text-xl font-medium leading-tight text-primary dark:text-primary-300">
       {post?.title}
    </h5>
    <p className="text-base text-primary dark:text-primary/80">
    {post?.excerpt}
    </p>
  </div>
</div>
</Link>
  )
}

export default PostComponent

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-purple-500
hover:text-white
hover:dark:bg-gray-950
`