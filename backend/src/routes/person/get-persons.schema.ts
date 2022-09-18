import { FastifySchema } from "fastify"
import { RouteGenericInterface } from "fastify/types/route"
import { Static, Type } from "@sinclair/typebox"

const GetPersonsQuery = Type.Object({
  take: Type.Optional(Type.Number()),
  skip: Type.Optional(Type.Number()),
  title: Type.Optional(Type.String())
})

export type GetPersonsQuery = Static<typeof GetPersonsQuery>

export interface GerPersonsReq extends RouteGenericInterface {
  Querystring: GetPersonsQuery
}

export const GerPersonsSchema: FastifySchema = {
  querystring: GetPersonsQuery
}
