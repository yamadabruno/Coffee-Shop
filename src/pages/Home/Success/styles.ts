import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-left: 3.125rem;
  align-items: center;
  justify-content: space-around;
  width: auto;

  .success-image {
    margin-top: 8.25rem;
    align-items: baseline;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  .success-container-title {
    h2 {
      font-size: 2rem;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Baloo 2', cursive;
    }
    p {
      margin-bottom: 2.5rem;
    }
  }

  .gradient {   
    padding: 1px;
    background: linear-gradient(
      30deg,
      ${(props) => props.theme['yellow-light']},
      ${(props) => props.theme['purple-light']}
    );
    border-radius: 6px 36px;
  }

  .success-container {
    padding: 2.5rem;
    border-radius: inherit;
    background-color: ${(props) => props.theme['background']};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme['white']};
  }

  .success-map,
  .success-timer,
  .success-payment {
    display: flex;
    padding: 1rem 0;
    font-size: 1rem;
    line-height: 130%;
  }

  .map-icon {
    background: ${(props) => props.theme['purple']};
    margin-right: 0.75rem;
  }

  .timer-icon {
    background: ${(props) => props.theme['yellow']};
    margin-right: 0.75rem;
  }

  .money-icon {
    background: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.75rem;
  }
`
