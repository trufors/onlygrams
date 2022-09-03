import fp from "fastify-plugin"
import fastifyStatic from "@fastify/static"
import * as path from "path"

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async (fastify) => {
  console.log(path.join(__dirname, "../../uploads"))

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, "../../uploads")
  })
})
