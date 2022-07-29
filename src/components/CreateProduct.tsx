import axios from 'axios';
import React from 'react'
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct =  {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic',
                    rating: {
                      rate: 42,
                      count: 10
                    }
                }

interface CreateProductProps {
  onCreate: (product:IProduct)=> void
}

export const CreateProduct = ({onCreate}:CreateProductProps) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('')

  const submitHandler = async (event:React.FormEvent) => {
event.preventDefault()
setError('')
if (value.trim().length === 0) {
  setError('Please enter valid title.')
  return
}
productData.title = value
  const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
  onCreate(response.data)
  }

  const changeHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
    <input
    type="text"
    className='border py-2 px-4 mb-2 w-full outline-0' placeholder='Product title'
    value={value}
    onChange={changeHandler}
    />
    {error && <ErrorMessage error={error}/>}
    <button className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}

