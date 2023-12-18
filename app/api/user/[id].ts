import { NextApiRequest, NextApiResponse } from 'next'
import { GetUser, User } from '@/app/types/user'

export default function personHandler(
  req: NextApiRequest,
  res: Response
) {
  const { query } = req
  const { id } = query
  const user = GetUser(id);

  // User with id exists
  return user
    ? new Response(JSON.stringify(user), {status:200})
    : new Response(`User with id: ${id} not found.`,{status:400 })
}