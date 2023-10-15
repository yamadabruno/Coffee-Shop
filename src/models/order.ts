export class OrderDTO {
  id?: number
  items: OrderItemDTO[] = []
  get total(): number {
    let sum = 0
    this.items.forEach((item) => {
      sum += item.subTotal
    })
    return sum
  }
}

export class OrderItemDTO {
  constructor(
    public productId: number,
    public quantity: number,
    public price: number,
    public content: string,
    public category: string[],
    public title: string,
    public imgUrl: string,
  ) {}
  get subTotal(): number {
    return this.price * this.quantity
  }
}

