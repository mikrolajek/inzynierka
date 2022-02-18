import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.id

  if (req.method === 'GET') {
    handleGET(userId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(userId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(userId, res) {
  const post = await prisma.user.findUnique({
    where: { id: Number(userId) },
    include: { posts: true },
  })
  res.json(post)
}

// DELETE /api/post/:id
async function handleDELETE(userId, res) {
  const post = await prisma.user.delete({
    where: { id: Number(userId) },
  })
  res.json(post)
}
