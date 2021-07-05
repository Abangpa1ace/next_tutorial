import React from 'react'
import HeadTag from '../components/HeadTag'
import Image from 'next/image';
import PhotosStyles from '../styles/Photos.module.css';

const Photo = ({ photos }) => {
  return (
    <div>
      <HeadTag />
      <h1>My Photos</h1>
      <ul class={PhotosStyles.photos}>
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <Image src={photo.thumbnailUrl} width={100} height={100} alt="photo-alt" />
              <span>{photo.title}</span>
            </li>)
        })}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json()

  return {
    props: {
      photos,
    }
  }
}

export default Photo
