import React from 'react';
import { Token as TokenType } from '../types/Token';

type Props = {
  tokens: TokenType[];
};

const Market: React.FC<Props> = ({ tokens }) => {
  return (
    <div>
      <h1>Market</h1>
      {tokens.map((token) => (
        <div key={token.name}>
          <br />
          <h2>{token.name}</h2>
          <p>Value: {token.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Market;
