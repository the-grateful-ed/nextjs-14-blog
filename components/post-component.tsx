import { JetBrains_Mono, VT323 } from "next/font/google";
import Link from "next/link";
import React from "react";

import { Badge } from "@/components/ui/badge";

import { type Post } from "@/utils/interface";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Props {
  post: Post;
}

const font = JetBrains_Mono({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  return (
    // <Card>
    //   <Link href={`/posts/${post?.slug?.current}`}>
    //     <h2 className={`${font.className} text-2xl dark:text-slate-300`}>
    //       {post?.title}
    //     </h2>
    // <p className={`${dateFont.className} my-2 text-purple-800`}>
    //   {new Date(post?.publishedAt).toDateString()}
    // </p>
    //     <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
    //     <div>
    // {post?.tags?.map((tag) => <Badge key={tag?._id}>#{tag?.name}</Badge>)}
    //     </div>
    //   </Link>
    // </Card>
    <Link href={`/posts/${post?.slug?.current}`}>
      <Card className="block w-full rounded-xl overflow-hidden border border-primary bg-card shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <CardHeader className="border-b-2 border-[#0000002d] px-6 py-3 text-neutral-600">
          <p className={`${dateFont.className} my-2 text-purple-800`}>
            {new Date(post?.publishedAt).toDateString()}
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-primary">
          {post?.title}
          </h5>
          <p className="text-base text-primary line-clamp-3">{post?.excerpt}</p>
        </CardContent>
        <CardFooter className="space-x-2">
          {post?.tags?.map((tag) => <Badge key={tag?._id}>#{tag?.name}</Badge>)}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostComponent;

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
`;
