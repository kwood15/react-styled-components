import styled from 'styled-components';

export const Recipe = styled.div`
  color: ${(props) => props.theme.secondaryColor};
`;

export const Title = styled.div`
  color: ${(props) => props.theme.primaryColor};
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
