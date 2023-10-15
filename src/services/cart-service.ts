import { OrderDTO, OrderItemDTO } from '../models/order'
import * as cartRepository from '../localstorage/cart-repository'
import { CoffeeDTO } from '../models/product'

export function saveCart(cart: OrderDTO) {
  cartRepository.save(cart)
}

export function getCart(): OrderDTO {
  return cartRepository.get()
}

export function addProduct(product: CoffeeDTO) {
  const cart = cartRepository.get()
  const item = cart.items.find((x) => x.productId === product.id)
  if (!item) {
    const newItem = new OrderItemDTO(
      product.id,
      product.quantity,
      product.price,
      product.content,
      product.category,
      product.title,
      product.imgUrl,
    )
    cart.items.push(newItem)
    cartRepository.save(cart)
  }
}
export function clearCart(productId: number) {
  const cart = cartRepository.get()
  const item = cart.items.find((x) => x.productId === productId)
  if (item) {
    cartRepository.clear()
  }
}

export function removeCartItem(productId: number) {
  const cart = cartRepository.get() 
  cart.items = cart.items.filter((x) => x.productId !== productId)
  cartRepository.save(cart)
}

export function increaseItem(productId: number) {
  const cart = cartRepository.get()
  const item = cart.items.find((x) => x.productId === productId)
  if (item) {
    item.quantity++
    cartRepository.save(cart)
  }
}

export function decreaseItem(productId: number) {
  const cart = cartRepository.get()
  const item = cart.items.find((x) => x.productId === productId)
  if (item) {
    item.quantity--
    if (item.quantity < 1) {
      cart.items = cart.items.filter((x) => x.productId !== productId)
    }
    cartRepository.save(cart)
  }
}

