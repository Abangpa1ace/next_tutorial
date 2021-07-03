import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta keyword="next.js" contents="This Blog is for Next js"  />
      </Head>
      <h2>Welcome to My Blog</h2>

    </div>
  )
}
