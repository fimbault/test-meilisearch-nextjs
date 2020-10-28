import MeiliSearch from "meilisearch";
import React, { useState, useEffect } from 'react';

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700/"
});


export default function Home() {

  return (
    <div>
      <main>hello meilisearch</main>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(){

  const index = await client.getIndex('movies')
  const search = await index.search('s')
  const num = search.nbHits
  console.log(num)

  return { props: { num } }
}
