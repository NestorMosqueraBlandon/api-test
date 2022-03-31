import Fastify, { fastify, FastifyReply, FastifyRequest } from 'fastify';

const server = Fastify({
    logger: true
});

const port = 8300;

server.get('/status', (request: FastifyRequest, reply: FastifyReply) =>{
    reply.send("Server is working");

})

server.route({
    method: "GET",
    url: '/',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send("Server is working in the main route");

    }
})

const main = async () => {
    try{
        await server.listen(port);
    }catch(error){
        server.log.error(error);
        process.exit(1);
    }
}

main();