import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import { HomeMain } from '../components/home/main'

export default function Home() {
  useEffect(() => {
    axios
      .get('/api/locateme')
      .then(({ data }) => console.log({ data }))
      .catch((error) => console.log({ error }))
  })

  return (
    <div>
      <Head>
        <title>Boost N Boom | Home</title>
        <meta
          name="description"
          content="Want boosting and content management for your business here comes Boost N Boom | Home"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeMain />
      </main>
    </div>
  )
}
