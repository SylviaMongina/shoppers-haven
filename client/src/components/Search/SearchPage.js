import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    href: '#',
    price: '$32.00',
    color: 'Mint',
    store: 'Amazon',
    size: 'Medium',
    inStock: true,
    imageSrc: 'https://smarttechphones.co.ke/wp-content/uploads/2022/10/apple-iphone-14-pro-max-purple.jpg',
    imageAlt: 'Front side of mint cotton t-shirt with wavey lines pattern.',
  },
  {
    id: 2,
    name: 'iPhone 14 Pro Max',
    href: '#',
    price: '$32.00',
    color: 'Charcoal',
    store: 'Alibaba',
    inStock: false,
    leadTime: '7-8 years',
    size: 'Large',
    imageSrc: 'https://www.humtechke.com/wp-content/uploads/2022/07/Apple-Iphone-14-Pro-Max.jpeg',
    imageAlt: 'Front side of charcoal cotton t-shirt.',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SearchPage() {
  return (
    <div className='mt-24'>
      <div className='flex justify-around'>
        <div className="p-2 rounded-lg w-5/12 search-div flex shadow bg-white">
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
                />
            </div>
            <div>
                <MagnifyingGlassIcon className="p-2 mx-2 text-white search-button cursor-pointer" aria-hidden="true" />
            </div>
        </div>
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
        <div className="mx-auto w-10/12 py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
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
                                    src={product.imageSrc}
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
                                        <button className="ml-4 text-white font-medium px-4 py-2 rounded button shadow">Go to Store</button>
                                    </div>
                                    <p className="mt-0 text-lg">From {product.store}</p>
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
    </div>
  )
}

export default SearchPage
