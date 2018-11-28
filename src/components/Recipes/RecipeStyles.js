import styled from 'styled-components';
import { theme } from '../../theme';

export const Recipe = styled.div`
  background-color: ${theme('colors.background-highlight')};
`;

export const Title = styled.div`
  font-weight: bold;
`

export const Ingredients = styled.ul`
  margin: 5px 0;
`

export const Ingredient = styled.li`
  & .name {
  }

  & .quantity {
  }
`
