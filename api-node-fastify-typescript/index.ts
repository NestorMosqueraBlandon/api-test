import Fastify, { FastifyReply, FastifyRequest } from 'fastify';

// FastifyReply == Response Express

const application = Fastify({
    logger: true
});

const port = 8300;

application.get('/status', (request: FastifyRequest, reply: FastifyReply) =>{
    reply.send("Server is working");
})

application.route({
    method: "GET",
    url: '/',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send("Server is working in the main route");
    }
})

const main = async () => {
    try{
        await application.listen(port);
    }catch(error){
        application.log.error(error);
        process.exit(1);
    }
}

main();