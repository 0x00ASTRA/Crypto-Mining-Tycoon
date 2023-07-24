import React from 'react';

type Props = {
  onLoadGame: () => void;
};

const LoadGameButton: React.FC<Props> = ({ onLoadGame }) => {
  return <button onClick={onLoadGame} className="game-button">Load Game</button>;
};

export default LoadGameButton;
