import React from 'react';

import { IProduct } from "../models"

interface ProductProps {
  product: IProduct
} 

export const Product = ({product}:ProductProps) => {
  const [visible, setVisible] = React.useState(false);
  const bgClassName = visible ? 'bg-blue-400' : 'bg-yellow-400'
  const btnClasses = ['py-2 px-4 border ', bgClassName]
  return (
    <div className='py-2 px-4 rounded flex flex-col items-center mb-2'>
    <img className='w-1/6' alt={product.title} src={product.image}/>
    <p>{product.title}</p>
    <p className="font-bold">{product.price}</p>
    <button onClick={()=>setVisible(!visible)} className={btnClasses.join('')}>{visible ? 'Hide Details' : 'Show Details'}</button>
    {visible && <div>
    <p>{product.description}</p>
    <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
    </div>}
    </div>
  )
}

