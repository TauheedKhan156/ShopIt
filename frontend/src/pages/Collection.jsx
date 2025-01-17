import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState();
  const [filterProducts,setFilterProducts] = useState([]);

  useEffect(()=>{
    setFilterProducts(products);
  },[])

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS<img className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div>
            <p className='flex gap-2'>
              <input className='w-3' value={"Men"} type="checkbox" /> Men
            </p>
              
            <p className='flex gap-2'>
              <input className='w-3' value={"Men"} type="checkbox" /> Women
            </p>

            <p className='flex gap-2'>
              <input className='w-3' value={"Men"} type="checkbox" /> Kids
            </p>
          </div>
        </div>

        {/* subCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div>
            <p className='flex gap-2'>
              <input className='w-3' value={"Topwear"} type="checkbox" /> Topwear
            </p>
              
            <p className='flex gap-2'>
              <input className='w-3' value={"Bottomwear"} type="checkbox" /> Bottomwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' value={"Winterwear"} type="checkbox" /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2' name="" id="">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts && filterProducts.length>0 && filterProducts.map((item,index)=>(
              <ProductItem 
              key={index} 
              id={item.id} 
              image={item.image} 
              name={item.name} 
              price={item.price} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Collection