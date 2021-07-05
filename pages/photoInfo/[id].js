import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PhotoInfo = ({ photo }) => {
  const { title, thumbnailUrl } = photo;
  const router = useRouter();

  return (
    <div>
      <h3>{title}</h3>
      <Image src={thumbnailUrl} width={500} height={500} alt="photo-alt" />
      <Link href="/photo">뒤로 가기</Link>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/2`);
  const photo = await res.json()

  return {
    props: {
      photo,
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json()
  const paths = photos.map(photo => {
    return {
      params: { id: photo.id.toString() }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default PhotoInfo
