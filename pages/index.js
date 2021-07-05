import React, { useEffect, useState } from 'react';
import HeadTag from '../components/HeadTag';


export default function Home({ posts }) {

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

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}

// 서버의 데이터가 빈번하게 변하는 경우(변할떄마다 리로드)
// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`);
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     }
//   }
// }

// 서버의 데이터가 변하지 않는 경우
// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`);
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 20,   // 서버 재접속이 유효한 경과시간
//   }
// }
