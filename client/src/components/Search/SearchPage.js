import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import DotLoader from "react-spinners/DotLoader";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import './search.css'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function SearchPage() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    setLoading(true)
    fetchProducts();
  }, [])

  const fetchProducts = async (search = '') => {
    setLoading(true);
    try{
      const response = await fetch(`/products${search ? `?search=${search}` : ''}`);
      if (!response.ok){
        throw new Error('Network response was not okay');
      }

      const data = await response.json();
      setProducts(data);
    }catch (error){
      console.error('Error getching products:', error);
    }finally{
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(searchItem);
  };
  return (
    <div>
    { 
      loading ? (
        <div className='loading-screen'>
          <DotLoader
            color={"#14B8A6"}
            loading={loading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1 className='mt-5'>Loading ...</h1>
        </div> 
      ) 
      
      :

    (<div className='mt-24'>
      <div className='flex justify-around'>
        <form onSubmit={handleSearch} className="p-2 rounded-lg w-5/12 search-div flex shadow bg-white">
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
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-lg placeholder-gray-500 focus:border-green-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                placeholder="Search"
                />
              </div>
            <button type="submit" className="p-2 mx-2 text-green-500 cursor-pointer">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-3 text-sm font-semibold text-gray-900 shadow ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Sort By
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <button
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                        )}
                        >
                        Price High-Low
                        </button>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <button
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                        )}
                        >
                        Price Low-high
                        </button>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <button
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                        )}
                        >
                        Relevance
                        </button>
                    )}
                    </Menu.Item>
                </div>
                </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="bg-white">
        <div className="mx-auto w-9/12 py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
            <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Search Results</h1>
            <div className="mt-12 w-full">
                <section aria-labelledby="cart-heading">
                    <h2 id="cart-heading" className="sr-only">
                    Items in your shopping cart
                    </h2>
                    <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                        {products.map((product) => (
                            <li key={product.id} className="flex py-6">
                                <div className="flex-shrink-0">
                                    <img
                                    src={product.image_url}
                                    alt={product.imageAlt}
                                    className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                                    />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                    <div>
                                    <div className="flex justify-between">
                                        <h4 className="text-sm">
                                            {product.name}
                                        </h4>
                                        <a target='blank' href={product.website_url} className="ml-4 text-white font-medium no-underline px-4 py-2 rounded button shadow">Go to Store</a>
                                    </div>
                                    <p className="mt-0 text-lg">From {product.website_name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between">
                                        <p className="text-sm font-medium hover:text-indigo-500">
                                        <span>Price: {product.price}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
      </div>
    </div>)
    }
    </div>
  )
}

export default SearchPage
