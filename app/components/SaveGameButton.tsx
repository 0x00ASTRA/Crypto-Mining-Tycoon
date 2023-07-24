import React from 'react';

type Props = {
  onSaveGame: () => void;
};

const SaveGameButton: React.FC<Props> = ({ onSaveGame }) => {
  return <button onClick={onSaveGame} className="game-button">Save Game</button>;
};

export default SaveGameButton;
