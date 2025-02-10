import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const [latestProducts,setLatestProducts] = useState();
    const { products } = useContext(ShopContext);

    useEffect(() => {
        if (products.length>0) {
            setLatestProducts(products.slice(0, 10)); // Update when products are available
        }
    }, [products]);



    return (

        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Here you will find the most recent collections of our store.
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts && latestProducts.length > 0 && latestProducts.map((item,index) => (
                        <ProductItem key={index} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        price={item.price} 
                        />
                    ))
                }
            </div>

        </div>

    )
}

export default LatestCollection;