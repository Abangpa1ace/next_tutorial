import React from 'react'
import Head from 'next/head';

const HeadTag = ({
  title,
  keyword,
  contents,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} contents={contents} />
    </Head>
  )
}

export default HeadTag
