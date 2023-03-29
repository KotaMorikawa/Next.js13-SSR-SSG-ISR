// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user: Data[] = await prisma.user.findMany({});
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  } finally {
    await prisma.$disconnect();
  }
}
