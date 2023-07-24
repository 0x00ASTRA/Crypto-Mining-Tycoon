export type TokenName = 'Bitcoin' | 'Ethereum'; // Add this line

export type Token = {
  name: TokenName;
  value: number;
  amount: number;
};
