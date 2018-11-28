import React from 'react';
import { Tile, Tiles } from './TileStyles';

const TileContainer = ({ children }) => {
  return (
    <Tiles>
      {React.Children.map(children, (child, i) => (
        <Tile key={i}>
          {child}
        </Tile>
      ))}
    </Tiles>
  );
}

export default TileContainer;
