import React, { useState } from 'react'
import './homepage.css'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')


  function handleSearch(e) {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`)
    }
  }
  return (
    <>
      <div className='header-div flex flex-column justify-center items-center py-44'>
        <h1 className='text-8xl z-10 header text-center'>SHOPPERS HAVEN</h1>
        <form onSubmit={handleSearch} className="p-3 rounded-lg w-5/12 bg-white z-10 search-div flex">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-lg placeholder-gray-500 focus:border-green-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
              placeholder="Search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit">
            <MagnifyingGlassIcon className="p-2 ml-5 text-white search-button cursor-pointer" aria-hidden="true" />
          </button>
        </form>
      </div>
      <div className='flex justify-center items-center flex-col text-center w-10/12 m-20 what-we-do'>
        <div className='left-rectangle shadow'></div>
        <div className='right-rectangle shadow'></div>
        <h1 className='text-6xl'>What we do</h1>
        <p className='text-2xl'>
          Shopper’s Haven is an online shopping tool that allows users to search for products across multiple e-commerce sites such as Amazon, eBay, Shopify, and Alibaba.
        </p>
        <hr />
        <p className='text-2xl'>
          It provides a comparison of prices and other relevant information.Shopper’s Haven also computes the marginal benefit and cost benefit analysis of purchasing products from different e-commerce sites and gives you the best products ranked accordingly.
        </p>
        <a href='/about' className='rounded drop-shadow-lg py-2 px-5 text-white button no-underline'>Learn More</a>
      </div>
    </>
  )
}

export default Home
