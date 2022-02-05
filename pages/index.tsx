import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
export interface PostProps {
  posts: Post[]
}
export default function Home({ posts }: PostProps) {
  console.log(posts)
  return (
    <div className="">
      <Head>
        <title>Medium clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Posts posts={posts} />
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] {
  _id,
  title,
  slug,
  description,
  author->{
    name,
    image
  },
  mainImage,
  image,
  }`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
