import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import ItemList from '../src/components/ItemList';

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const API_URI = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const getData = () => {
    axios.get(API_URI)
      .then(({ data }) => setList(data))
  }
  return (
    <div>
      <Head>
        next.js
      </Head>
      <ItemList list={list} key={list.id} />
    </div>
  )
}
