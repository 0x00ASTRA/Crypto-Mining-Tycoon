"use client"
import React, { useState } from 'react';
import Wallet from './components/Wallet';
import Market from './components/Market';
import UpgradeButton from './components/UpgradeButton';
import { Token, TokenName } from './types/Token';
import LoadGameButton from './components/LoadGameButton';
import SaveGameButton from './components/SaveGameButton';

const initialTokens: Token[] = [
  { name: 'Bitcoin', value: 50000, amount: 0 },
  { name: 'Ethereum', value: 3000, amount: 0 },
  // Add more tokens as needed
];

const Game: React.FC = () => {
  const [tokens, setTokens] = useState(initialTokens);
  const [upgrades, setUpgrades] = useState({ Bitcoin: 1, Ethereum: 1 });
  const [balances, setBalances] = useState({ Bitcoin: 0, Ethereum: 0, USD: 10000 });

  const handleBuy = (name: TokenName, amount: number) => {
    // TODO: Implement this function
  };

  const handleSell = (name: TokenName, amount: number) => {
    // TODO: Implement this function
  };

  const handleMine = (name: TokenName) => {
    setTokens(tokens.map(token => 
      token.name === name ? { ...token, amount: token.amount + upgrades[name] } : token
    ));
  };

  const handleUpgrade = (name: TokenName) => {
    setUpgrades({ ...upgrades, [name]: upgrades[name] + 1 });
  };

  const saveGameState = async () => {
    const response = await fetch('/api/saveGameState', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tokens, upgrades, balances }),
    });
    const data = await response.json();
    console.log(data.message);
  };
  
  const loadGameState = async () => {
    const response = await fetch('/api/loadGameState');
    const data = await response.json();
    setTokens(data.tokens);
    setUpgrades(data.upgrades);
    setBalances(data.balances);
  };

  return (
    <div>
      <h1>Crypto Mining Tycoon</h1>
      <LoadGameButton onLoadGame={loadGameState} />
      <SaveGameButton onSaveGame={saveGameState} />
      <Wallet tokens={tokens} onMine={(name) => handleMine(name as TokenName)} />
      <Market tokens={tokens} />
      {tokens.map(token => (
        <UpgradeButton key={token.name} onUpgrade={() => handleUpgrade(token.name as TokenName)} cost={upgrades[token.name] * 10} />
      ))}
    </div>
  );
};

export default Game;

