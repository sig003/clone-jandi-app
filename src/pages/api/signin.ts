import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
}

export default function signin(req: NextApiRequest, res: NextApiResponse<Data>) {
  const randomStringOne = Math.random().toString(36).substr(2,11);
  const randomStringTwo = new Date().getTime().toString(36);
  res.status(200).json({ result: 'S', token: `${randomStringOne}${randomStringTwo}` });
}
