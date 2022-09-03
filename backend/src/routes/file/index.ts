import { join } from "path"
import { FastifyPluginAsync } from "fastify"
import * as fs from "node:fs"
import { pipeline } from "node:stream"
import { promisify } from "node:util"

const pump = promisify(pipeline)

const pathToUpload = join(__dirname, `../../../uploads`)

const fileRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post("/upload", async (request, reply) => {
    if (!request.isMultipart()) {
      return fastify.httpErrors.badRequest("Not multipart")
    }

    const data = await request.file()

    if (!data) {
      return fastify.httpErrors.badRequest("Bad file")
    }

    const filename = new Date().getTime() + data.filename

    await pump(data.file, fs.createWriteStream(join(pathToUpload, filename)))

    reply.send({ status: "ok", filename })
  })

  fastify.get<{ Params: { filename: string } }>("/:filename", async (request, reply) => {
    const { filename } = request.params

    if (!filename) {
      fastify.httpErrors.badRequest("No filename")
    }

    const file = fs.readFileSync(join(pathToUpload, filename))

    reply.send(file)
  })
}

export default fileRoutes
