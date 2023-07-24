import React from 'react';
import { Token as TokenType } from '../types/Token';

type Props = {
  token: TokenType;
  onMine: () => void;
};

const Token: React.FC<Props> = ({ token, onMine }) => {
  return (
    <div>
      <br />
      <h2>{token.name}</h2>
      <p>Value: ${token.value}</p>
      <p>Amount: {token.amount}</p>
      <button className='game-button' onClick={onMine}>Mine {token.name}</button>
    </div>
  );
};

export default Token;
