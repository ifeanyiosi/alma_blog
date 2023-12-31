import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { BsFillCalendarCheckFill } from "react-icons/bs";

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
        <Link className="font-bold text-[25px]" href={`/post/ ${post.slug}`}>
          {post.title}
        </Link>
      </h1>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            alt={post.author.name}
            height={30}
            width={30}
            className="align-middle object-contain rounded-full"
            src={post.author.photo.url}
          />

          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium flex items-center justify-center gap-x-2 text-gray-700">
          <BsFillCalendarCheckFill className="text-rose-500" />
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>

      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {" "}
        {post.excerpt}{" "}
      </p>

      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
