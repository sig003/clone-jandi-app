import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
}

export default function signin(req: NextApiRequest, res: NextApiResponse<Data>) {
  const token = Math.random().toString(36).substr(2,11) + new Date().getTime().toString(36);
  res.status(200).json({ result: 'S', token: token });
}
