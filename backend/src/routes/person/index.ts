import { FastifyPluginAsync } from "fastify"

import { CreatePersonReq, CreatePersonSchema } from "./create-person.schema"
import { GerPersonsReq, GerPersonsSchema } from "./get-persons.schema"

const personRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<CreatePersonReq>("/", { schema: CreatePersonSchema }, async (request, reply) => {
    const imageUrl = `file/${request.body.person.image}`
    const { image, ...data } = request.body.person

    return fastify.prisma.person.create({ data: { ...data, imageUrl } })
  })

  fastify.get<GerPersonsReq>("/all", { schema: GerPersonsSchema }, async ({ query }, reply) => {
    return {
      persons: await fastify.prisma.person.findMany({
        take: query.take || 100,
        skip: query.skip,
        where: { name: { contains: query.title, mode: "insensitive" } },
        orderBy: { createdAt: "desc" }
      }),
      total: await fastify.prisma.person.count({
        where: { name: { contains: query.title, mode: "insensitive" } }
      })
    }
  })
}

export default personRoutes
