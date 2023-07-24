import React from 'react';

type Props = {
  onSell: () => void;
};

const SellButton: React.FC<Props> = ({ onSell }) => {
  return <button onClick={onSell} className="game-button">Sell</button>;
};

export default SellButton;
