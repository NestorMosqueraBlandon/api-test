import Fastify from 'fastify';

const application = Fastify();
const port = 7100;

application.get("/status", (request, reply) => {
    reply.send({Hello: 'World'})
})

application.listen(port, () => {
    console.log("Server is running on port", port)
})