import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const DetailContainer = ({ item }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Item Detail ID : {id}
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    }
  }
}

export default DetailContainer
