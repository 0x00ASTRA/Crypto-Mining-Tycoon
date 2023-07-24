import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// Define the type of your data
interface Data {
  gameState: {
    tokens: { name: string; value: number; amount: number }[];
    upgrades: { [key: string]: number };
    balances: { [key: string]: number };
  };
}

// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');

// Configure lowdb to write data to JSON file
const adapter = new JSONFile<Data>(file);
const defaultData: Data = {
  gameState: {
    tokens: [
      { name: 'Bitcoin', value: 50000, amount: 0 },
      { name: 'Ethereum', value: 3000, amount: 0 },
    ],
    upgrades: { Bitcoin: 1, Ethereum: 1 },
    balances: { Bitcoin: 0, Ethereum: 0, USD: 10000 },
  },
};
const db = new Low<Data>(adapter, defaultData);

// Create an async function to read the data
async function readData() {
  await db.read();
  if (!db.data) {
    db.data = defaultData;
    await db.write();
  }
}

// Call the function
readData();

export default db;
