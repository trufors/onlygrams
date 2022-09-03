import { FastifySchema } from "fastify"
import { RouteGenericInterface } from "fastify/types/route"
import { Static, Type } from "@sinclair/typebox"

const CreatePersonDto = Type.Object({
  person: Type.Object({
    email: Type.String({ format: "email" }),
    name: Type.String(),
    description: Type.String(),
    image: Type.Optional(Type.String()),
    links: Type.Object({
      onlyFans: Type.String(),
      tiktok: Type.String(),
      instagram: Type.String()
    })
  })
})

export type CreatePersonDto = Static<typeof CreatePersonDto>

export interface CreatePersonReq extends RouteGenericInterface {
  Body: CreatePersonDto
}

export const CreatePersonSchema: FastifySchema = {
  body: CreatePersonDto
}
