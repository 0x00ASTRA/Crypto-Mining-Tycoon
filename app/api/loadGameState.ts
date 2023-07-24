import type { NextApiRequest, NextApiResponse } from 'next';
import db from './../db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const gameState = db.data.gameState;
    res.status(200).json(gameState);
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
