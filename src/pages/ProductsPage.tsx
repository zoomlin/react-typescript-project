import { useContext } from 'react';
import { ErrorMessage } from '../components/ErrorMessage';
import { Modal } from '../components/Modal';
import { Loader } from '../components/Loader';
import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
import { CreateProduct } from '../components/CreateProduct';
import { IProduct } from '../models';
import { ModalContext } from '../context/MmodalContext';


export const ProductsPage = () => {

const {loading, error, products, addProduct} = useProducts()
const {modal, open, close} = useContext(ModalContext)
const createHhandler = (product:IProduct) => {
  close()
  addProduct(product)
}

  return (
    <div  className='container mx-auto max-w-2xl pt-5'>
    {loading && <Loader/>}
    {error && <ErrorMessage error={error} />}
    {products.map(product=> <Product product={product} key={product.id} />)}
    {modal && <Modal title='Create new product' onClose={close}>
       

      <CreateProduct onCreate={createHhandler}/>
    </Modal>}
    <button onClick={open} className='absolute rounded-full bottom-5 right-5 round-full bg-red-700 text-white text-2xl px-5 py-2'>+</button>
    </div>
      );
}

