import React, { useEffect, useState } from 'react';
import HeadTag from '../components/HeadTag';


export default function Home() {
  return (
    <div>
      <HeadTag 
        title="My NEXT.js blog"
        keyword="next.js"
        contents="This blog is run for Next.js Studying!"
      />
      <h2>Welcome to My Blog</h2>

    </div>
  )
}
