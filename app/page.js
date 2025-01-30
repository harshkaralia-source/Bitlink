'use client'
import { useState } from 'react'
import Link from 'next/link'

const Home = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [generated, setGenerated] = useState('')

  const generate = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("/api/generate", requestOptions)
      .then(response => response.json())
      .then(result => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        setUrl('')
        setShortUrl('')
      })
      .catch(error => console.log('error', error));
  }

  return (
    <main className='px-6 sm:px-16 py-10 lg:py-20'>
      <section className='flex flex-col'>
        <div className="py-5">
          <h1 className="font-bold text-3xl md:text-4xl py-2">The Best URL Shortener in the Market</h1>
          <p className="font-light text-black/80 py-2 md:text-[18px]">No Login Required! Just Paste the Link, Write Custom Text and Hit Generate.</p>
        </div>
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder='Paste your url'
          className='p-4 bg-gray-100 my-2 rounded-lg focus:outline-purple-400 lowercase' />
        <input
          value={shortUrl}
          onChange={e => setShortUrl(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder='Enter custom text'
          className='p-4 bg-gray-100 my-2 rounded-lg focus:outline-purple-400 lowercase' />

        <button
          onClick={generate}
          className="p-4 my-3 bg-blue-500 text-white rounded-lg"
        >
          Generate
        </button>
      </section>

      {generated && <>
        <div className="flex flex-col gap-1 mt-3">

          <span className='font-semibold text-lg'>
            Copy your Link :
          </span>
          <code className='bg-zinc-700 rounded-md px-4 text-white p-2'>
            <Link
              href={generated}
              target='_blank'
              className='mt-4'
            >
              {generated}
            </Link>
          </code>
        </div>
      </>}
    </main >
  )
}

export default Home
