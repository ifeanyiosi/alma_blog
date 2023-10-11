import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg "
          src={post.featuredImage.url}
          alt={post.title}
          width={1000}
          height={320}
        />
      </div>

      <h1 className="transition duration-700 text-center mb-8 cursor-pointer">
        <Link href={`/post/ ${post.slug}`}>
          {post.title}
        </Link>
      </h1>

      <div>
        div
      </div>
    </div>
  );
};

export default PostCard;
