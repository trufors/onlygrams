import { FastifyPluginAsync } from "fastify"

import { CreateTaskReq, CreateTaskSchema } from "./create-task.schema"
import { GerTasksReq, GerTasksSchema } from "./get-tasks.schema"

const taskRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<CreateTaskReq>("/", { schema: CreateTaskSchema }, async (request, reply) => {
    const imageUrl = `file/${request.body.task.image}`

    const { image, ...data } = request.body.task

    return fastify.prisma.task.create({ data: { ...data, imageUrl } })
  })

  fastify.get<GerTasksReq>("/all", { schema: GerTasksSchema }, async ({ query }, reply) => {
    return {
      tasks: await fastify.prisma.task.findMany({
        take: query.take || 50,
        skip: query.skip,
        where: { category: { equals: query.category } },
        orderBy: { price: "desc" }
      }),
      total: await fastify.prisma.task.count({
        where: { category: { equals: query.category } }
      })
    }
  })
}

export default taskRoutes
