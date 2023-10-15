import styled from 'styled-components'

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;

  .aside-title {
    padding-left: 2rem;
  }
`

export const CheckoutContainer = styled.main`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`

export const Title = styled.h3`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', cursive;
  margin-bottom: 1rem;
`

export const ButtonCheckout = styled.button`
  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px;
  height: 2.785rem;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
    transition: 1s;
  }
`

//Payment

interface PaymentButtonProps {
  checked: boolean
}

export const ContainerPayment = styled.section`
  margin-top: 2.5rem;
  width: 41.375rem;
  height: auto;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  color: ${(props) => props.theme['base-text']};

  .payment-title {
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    p:nth-child(1) {
      font-weight: bold;
      display: flex;
      align-content: center;
      span {
        margin-right: 8px;
      }
    }
    p:nth-child(2n) {
      margin-left: 1.875rem;
      margin-bottom: 1.75rem;
    }
  }
  .payment-buttons {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 13rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 8px;
  font-size: 1.32rem;
`

export const PaymentButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const PaymentButton = styled.label<PaymentButtonProps>`
  width: 11.18rem;
  height: 3.2rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};
  box-shadow: ${(props) =>
    props.checked ? '0 0 0 2px' + props.theme.purple : 'none'};
  color: ${(props) => props.theme.purple};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;
  padding-left: 0.7rem;
  transition: background-color 0.5s ease-in-out;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  :focus {
    background-color: ${(props) => props.theme['purple-light']};
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }

  input {
    opacity: 0;
  }
`

// Sidebar

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme['base-card']};
  width: 448px;
  padding: 2.5rem;
  margin-left: 32px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;

  .checkout-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
  }

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
  .tags-title {
    margin-bottom: 8px;
  }
  .tags-container {
    display: flex;
  }
  .tags {
    display: flex;
    align-items: center;
  }
  .sign-tag {
    background: ${(props) => props.theme['base-button']};
    height: 2rem;
    width: 4.5rem;
    text-align: center;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-right: 8px;

    span {
      color: ${(props) => props.theme['purple']};
      gap: 4px;
    }
  }

  .remove-tag {
    width: 5.68rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border-color: transparent;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    font-size: 12px;
    gap: 4px;

    :hover {
      background: ${(props) => props.theme['purple-light']};
    }
  }

  .price-tag {
    font-size: 1rem;
    font-weight: 700;
  }

  .checkout-container {
    margin-top: 1.25rem;
  }

  .checkout-total-container {
    margin: 1.5rem 0;
  }

  .checkout-subtotal,
  .checkout-total-delivery,
  .checkout-total-order {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
    padding: 6px 0;

    p:nth-child(1) {
      font-size: 0.875rem;
    }
    p:nth-child(2n) {
      font-weight: bold;
      font-size: 1rem;
    }
  }
  .checkout-total-order {
    font-size: 1.25rem;
  }
`

//Address Form

export const FormContainer = styled.div`
  width: 41.375rem;
  height: auto;
  border-radius: 6px;
  display: flex;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

  .input-cep {
    display: flex;
    align-items: center;
  }

  .container-form {
    display: flex;
    flex-wrap: wrap;
  }

  form {
    button {
      border-style: none;
      height: 2.625rem;
      width: 2.5rem;
      margin-left: 4px;
    }
  }
  button:hover {
    background: ${(props) => props.theme['purple-light']};
    border-radius: 4px;
    box-shadow: none;
  }

  div {
    color: ${(props) => props.theme['base-text']};

    p:nth-child(1) {
      font-weight: bold;
      display: flex;
      align-content: center;
      span {
        margin-right: 8px;
      }
    }
    p:nth-child(2n) {
      margin-left: 1.875rem;
      margin-bottom: 1.75rem;
    }
  }

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-input']};
    border-radius: 4px;
    margin: 6px;
  }

  .form-error {
    color: ${(props) => props.theme['alert']};
    font-size: 12px;
  }

  [class^='col-'] {
    box-sizing: border-box;
    height: 2.625rem;
    padding: 12px;
  }

  .col-1 {
    width: 190px;
  }
  .col-2 {
    width: 562px;
  }
  .col-3 {
    width: 200px;
  }
  .col-4 {
    width: 350px;
  }
  .col-5 {
    width: 200px;
  }
  .col-6 {
    width: 276px;
  }
  .col-7 {
    width: 60px;
  }
`
