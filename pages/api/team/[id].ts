import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const teamId = req.query.id

  if (req.method === 'GET') {
    handleGET(teamId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(teamId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(teamId, res) {
  const post = await prisma.team.findUnique({
    where: { id: Number(teamId) },
    include: { posts: true },
  })
  res.json(post)
}

// DELETE /api/post/:id
async function handleDELETE(teamId, res) {
  const post = await prisma.team.delete({
    where: { id: Number(teamId) },
  })
  res.json(post)
}
