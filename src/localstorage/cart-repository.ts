/* eslint-disable @typescript-eslint/no-unsafe-return */

import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, str)
}

export function get(): OrderDTO {
    const str = localStorage.getItem(CART_KEY) || '{"items":[]}'
    const obj = JSON.parse(str) as OrderDTO;
    const cart = new OrderDTO();
   
    obj.items.forEach(x => {
        cart.items.push(new OrderItemDTO(x.productId, x.quantity, x.price,
            x.content, x.category,  x.title, x.imgUrl))
    })

    return cart;
}

export function clear() {
    localStorage.setItem(CART_KEY, '{"items":[]}');
}

export function remove() {
    localStorage.removeItem(CART_KEY)
}
