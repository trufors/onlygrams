import { Category } from "@prisma/client"
import { FastifySchema } from "fastify"
import { RouteGenericInterface } from "fastify/types/route"
import { Static, Type } from "@sinclair/typebox"

const GetTasksQuery = Type.Object({
  take: Type.Optional(Type.Number()),
  skip: Type.Optional(Type.Number()),
  category: Type.Optional(Type.Enum(Category))
})

export type GetTasksQuery = Static<typeof GetTasksQuery>

export interface GerTasksReq extends RouteGenericInterface {
  Querystring: GetTasksQuery
}

export const GerTasksSchema: FastifySchema = {
  querystring: GetTasksQuery
}
