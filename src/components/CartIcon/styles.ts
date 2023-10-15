import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Cart = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;

`

export const CartCounter = styled.div`
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-size: 10px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: -5px;
  left: 105%;
`
