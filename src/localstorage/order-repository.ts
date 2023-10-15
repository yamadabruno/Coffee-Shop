import { AddressAndPaymentDTO, FinalOrderDTO } from '../models/finalOrder'
import { ORDER_KEY } from '../utils/system'

export function save(order: FinalOrderDTO) {
  const str = JSON.stringify(order)
  localStorage.setItem(ORDER_KEY, str)
}

export function get(): FinalOrderDTO {
  const str = localStorage.getItem(ORDER_KEY) || '{"items":[]}'
  const obj = JSON.parse(str) as FinalOrderDTO
  const order = new FinalOrderDTO()

  obj.items.forEach((x) => {
    order.items.push(
      new AddressAndPaymentDTO(
        x.bairro,
        x.localidade,
        x.logradouro,
        x.numero,
        x.uf,
        x.paymentMethod,
      ),
    )
  })
  return order
}
