import axios, { AxiosError } from 'axios';
import React from 'react';
import { IProduct } from '../models';
export function useProducts() {

  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

function addProduct(product:IProduct) {
    setProducts(prev=>[...prev, product])
  }

  async function fetchProducts(){
    try {
      setError('')
    setLoading(true)
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts(response.data)
    setLoading(false)
      
    } catch (e: unknown) {
      const error = e as AxiosError
    setLoading(false)
    setError(error.message)

    }
  }
  React.useEffect(() => {
    fetchProducts()
  }, []);
        return {products, error, loading, addProduct}
}
