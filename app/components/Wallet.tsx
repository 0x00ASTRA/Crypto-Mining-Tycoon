import React from 'react';
import { Token as TokenType, TokenName} from '../types/Token';
import Token from './Token'

type Props = {
  tokens: TokenType[];
  onMine: (name: TokenName) => void;
};

const Wallet: React.FC<Props> = ({ tokens, onMine }) => {
  return (
    <div>
      <h1>Wallet</h1>
      {tokens.map((token) => (
        <Token
          key={token.name}
          token={token}
          onMine={() => onMine(token.name)}
        />
      ))}
    </div>
  );
};

export default Wallet;
