import React from 'react';

type Props = {
  onBuy: () => void;
};

const BuyButton: React.FC<Props> = ({ onBuy }) => {
  return <button onClick={onBuy} className="game-button">Buy</button>;
};

export default BuyButton;
