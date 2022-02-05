import React from 'react'
import Link from 'next/link'
import { PostProps } from '../pages'
import Image from 'next/image'
import { urlFor } from '../sanity'
const Posts = ({ posts }: PostProps) => {
  return (
    <div className="  grid-col-1 mx-auto grid max-w-6xl gap-3 p-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:p-3">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="cursor-pointer rounded-lg  border transition-transform duration-200 ease-in-out hover:scale-105">
            <img
              src={urlFor(post.mainImage).url()!}
              className="h-60 w-full cursor-pointer object-cover "
            />
            <div className="flex justify-between bg-white p-5">
              <div>
                <p>{post.title}</p>
                <p>
                  {post.description} by {post.author.name}
                </p>
              </div>
              <>
                {urlFor(post.author.image).url() && (
                  <img
                    src={urlFor(post.author.image).url()!}
                    alt="author image"
                    className=" h-10 w-10 rounded-full object-cover"
                  />
                )}
              </>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Posts
