/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react'

export interface CreateFinalOrderData {
  paymentMethod: string
  logradouro: string
  numero: string
  complemento?: string
  bairro: string
  localidade: string
  uf: string
}

export type ContextFinalOrderType = {
  contextFinalOrder: CreateFinalOrderData
  setContextFinalOrder: (contextOrder: CreateFinalOrderData) => void
}

export const ContextFinalOrder = createContext<ContextFinalOrderType>({
  contextFinalOrder: {
    paymentMethod: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  },
  setContextFinalOrder: () => {},
})
