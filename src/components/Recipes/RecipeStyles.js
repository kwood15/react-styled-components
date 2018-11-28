import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colours.secondary};
  background: ${(props) => props.theme.colours.white};
  border: 1px solid ${(props) => props.theme.colours.midGrey};
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colours.primary};
  font-weight: bold;
`

export const Ingredients = styled.ul`
  margin: 5px 0;
`

export const Ingredient = styled.li`
  & .amount {
  }

  & .unit {
  }
`
