import styled from 'styled-components'

export const CoffeeCards = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  color: ${(props) => props.theme['base-title']};
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .price {  
    display: flex;
    align-items: center;
    margin-top: 1.25rem;

    .price-tag {
      display: flex;
      align-items: flex-start;
      gap: 4px;

      h3 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-text']};
        font-family: 'Baloo 2', cursive;
      }
    }

   .sign-tag {
      background: ${(props) => props.theme['base-button']};
      height: 2.375rem;
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
      }
    } 

    .cart {
      background-color: ${(props) => props.theme['purple-dark']};
      width:2.375rem;
      height: 2.375rem;
      text-align: center;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.25rem;
    }
  }

  img {
    display: flex;
    flex-direction: column;
    margin-top: calc(0px - 1.25rem - 6px);
    margin-bottom: 1rem;
  }

  h2 {
    margin: 16px 0 8px 0;
    font-family: 'Baloo 2';
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }

  .tag {
    display: flex;
    margin: 0 auto;
    width: fit-content;

    h6 {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      height: 1.32rem;
      width: fit-content;
      margin-right: 5px;
      padding: 4px 8px;
      text-transform: uppercase;
      border-radius: 6.25rem;
    }
  }
`
