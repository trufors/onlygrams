import { FastifyPluginAsync } from "fastify"

import { CreatePersonReq, CreatePersonSchema } from "./create-person.schema"
import { GerPersonsReq, GerPersonsSchema } from "./get-persons.schema"

const personRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<CreatePersonReq>("/", { schema: CreatePersonSchema }, async (request, reply) => {
    return fastify.prisma.person.create({ data: request.body.person })
  })

  fastify.get<GerPersonsReq>("/all", { schema: GerPersonsSchema }, async ({ query }, reply) => {
    return fastify.prisma.person.findMany({ take: query.take || 100, skip: query.skip })
  })
}

export default personRoutes
