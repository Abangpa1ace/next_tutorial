import React, { useEffect, useState } from 'react';
import HeadTag from '../components/HeadTag';


export default function Home({ posts }) {
  console.log(posts)

  return (
    <div>
      <HeadTag 
        title="My NEXT.js Home!"
        keyword="next.js"
        contents="This blog is run for Next.js Studying!"
      />
      <h2>Welcome to My Blog</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {post.title}
            </li>)
        })}
      </ul>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?start=08&_end=10`)
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?start=08&_end=10`)
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}
