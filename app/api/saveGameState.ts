import type { NextApiRequest, NextApiResponse } from 'next';
import db from './../db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    db.data.gameState = req.body;
    await db.write();
    res.status(200).json({ message: 'Game state saved successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
