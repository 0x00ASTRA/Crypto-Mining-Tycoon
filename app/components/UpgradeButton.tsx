import React from 'react';

type Props = {
  onUpgrade: () => void;
  cost: number;
};

const UpgradeButton: React.FC<Props> = ({ onUpgrade, cost }) => {
  return <button onClick={onUpgrade} className="game-button">Upgrade Mining Rig (Cost: {cost} BTC)</button>;
};

export default UpgradeButton;
