import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  background-color: ${(props) => props.theme['background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
