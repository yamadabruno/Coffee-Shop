/* eslint-disable @typescript-eslint/ban-types */
import { CoffeeCards } from './styles'
import { CoffeeDTO } from "../../models/product"
import { ShoppingCartSimple } from 'phosphor-react';
import { useContext, useState } from 'react'
import * as cartService from '../../services/cart-service'
import { ContextCartCount } from '../../utils/context-cart'
import { OrderDTO } from '../../models/order';

type Props = {
  product: CoffeeDTO;
}

export function Card({ product }: Props) {

  const { setContextCartCount } = useContext(ContextCartCount);

  const [count, setCount] = useState(0);

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart())

  function handleDecrease() {
    const decr = count - 1
    if (decr !== -1) {
      setCount(decr)
      setCart(cartService.getCart())
      setContextCartCount(cart.items.length)
    }  
    cartService.decreaseItem(decr);
  }

  function handleIncrease() {
    const sum = count + 1
    cartService.increaseItem(sum);
    setCart(cartService.getCart());
    setCount(sum)
  }

  function updateCart() {
    const newCart = cartService.getCart()
    setCart(newCart);
    setContextCartCount(newCart.items.length)
  }

  function handleAddCart() {   
    cartService.addProduct({ ...product, quantity: count })  
    updateCart()
  }

  return (
    <>
      < CoffeeCards>
        <img src={product.imgUrl} alt={product.title} />
        <div className='tag'>
          {product.category.map(
            (item) =>
              <h6>{item}
              </h6>
          )}
        </div>
        <h2>{product.title}</h2>
        <p className='content'>{product.content} </p>
        <div className='price'>
          <p className='price-tag'>R$
            <h3>
              {product.price.toFixed(2)}
            </h3>
          </p>
          <p className='sign-tag'>
            <span
              onClick={() => handleDecrease()}>-</span>
            {count}
            <span
              onClick={() => handleIncrease()}
            >+</span>
          </p>
          <span onClick={() => handleAddCart()} className='cart'>
            <ShoppingCartSimple
              size={24}
              color="#fff"
              weight="fill" />
          </span>
        </div>
      </CoffeeCards >
    </>
  )
}
