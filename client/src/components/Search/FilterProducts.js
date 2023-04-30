import React, {useContext} from 'react'
import { ProductContext } from '../../context/ProductContext';

function FilterProducts({products, product }) {
    const { productState:{delivery_cost , searchQuery, sort}, productDispatch } = useContext(ProductContext)

    
    const transformProducts = () => {

        let sortedProducts = products;

      if (sort) {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }
      if (delivery_cost) {
        sortedProducts = sortedProducts.sort((a, b) =>
          delivery_cost === "lowToHigh" ? a.delivery_cost - b.delivery_cost : b.delivery_cost - a.delivery_cost
        );
      }
  
      if (searchQuery) {
        sortedProducts = sortedProducts.filter((prod) =>
          prod.name.toLowerCase().includes(searchQuery)
        );
      }
  
      return sortedProducts
    };
  


  return (
    <>
  
                    { transformProducts().map((product) => (
                          <li key={product.id} className="flex py-6">
                          
                                 <div className="flex-shrink-0">
                                    <img
                                    src={product.image_url}
                                    alt={product.imageAlt}
                                    className="h-32 w-32 bg-cover rounded-md object-cover object-center sm:h-32 sm:w-32"
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
                                        <span>Price: ${product.price}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between">
                                        <p className="text-sm font-medium hover:text-indigo-500">
                                        <span>Delivery Cost: ${product.delivery_cost}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>))}
                    </>            
  )
}

export default FilterProducts


{/* <li key={product.id} className="flex py-6">
                                <div className="flex-shrink-0">
                                    <img
                                    src={product.image_url}
                                    alt={product.imageAlt}
                                    className="h-32 w-32 bg-cover rounded-md object-cover object-center sm:h-32 sm:w-32"
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
                                        <span>Price: ${product.price}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between">
                                        <p className="text-sm font-medium hover:text-indigo-500">
                                        <span>Delivery Cost: ${product.delivery_cost}</span>
                                        </p>
                                    </div>
                                </div>
                            </li> */}