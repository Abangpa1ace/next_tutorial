import React from 'react';
import { useRouter } from 'next/router'

const DetailContainer = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Item Detail ID : {id}
    </div>
  )
}

export default DetailContainer
