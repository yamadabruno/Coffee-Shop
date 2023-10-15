import * as orderRepository from '../localstorage/order-repository'
import { FinalOrderDTO } from '../models/finalOrder'

export function saveFinalOrder(order: FinalOrderDTO) {
    orderRepository.save(order)
}

export function getFinalOrder(): FinalOrderDTO {
    return orderRepository.get()
  }