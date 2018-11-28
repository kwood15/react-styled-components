import styled from 'styled-components';

export const Tiles = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Tile = styled.div`
  flex: 1 1 25%;
  display: flex;
  & > div {
    flex: 1 0 auto;
  }
`
