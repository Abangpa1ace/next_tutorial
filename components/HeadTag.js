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

HeadTag.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog powered by Next.js',
  contents: 'practice next js',
}

export default HeadTag
