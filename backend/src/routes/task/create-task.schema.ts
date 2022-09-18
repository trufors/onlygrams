import { FastifySchema } from "fastify"
import { RouteGenericInterface } from "fastify/types/route"
import { Static, Type } from "@sinclair/typebox"
import { Category } from "@prisma/client"

const CreateTaskDto = Type.Object({
  task: Type.Object({
    description: Type.String(),
    image: Type.Optional(Type.String()),
    telegramLink: Type.String(),
    subscribersCount: Type.Number(),
    category: Type.Enum(Category),
    price: Type.String()
  })
})

export type CreateTaskDto = Static<typeof CreateTaskDto>

export interface CreateTaskReq extends RouteGenericInterface {
  Body: CreateTaskDto
}

export const CreateTaskSchema: FastifySchema = {
  body: CreateTaskDto
}
