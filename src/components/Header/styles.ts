import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 69rem;
  margin: 0 auto;
  padding: 2rem 0;

  .nav-link-header{
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    p {
      width: 9rem;
      height: 2.38rem;
      border-radius: 6px;
      font-size: 0.875rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 6px;

      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
   
  }
`
