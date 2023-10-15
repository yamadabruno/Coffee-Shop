export class FinalOrderDTO{
    items: AddressAndPaymentDTO[] = []
}

export class AddressAndPaymentDTO {
    constructor(
      public paymentMethod: string,
      public logradouro: string,
      public numero: string,
      public bairro: string,
      public localidade: string,
      public uf: string,
    ) {}
  }
  