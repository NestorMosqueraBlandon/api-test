import Fastify from 'fastify';
import connection from './database';


const port = process.env.PORT || 7000;
const server = Fastify({
    logger: true
});

const uri = "mongodb+srv://user:api12345@cluster0.2tqpl.mongodb.net/apirest?retryWrites=true&w=majority"

const main = async () => {
    try{
        await server.listen(port);
        console.log('Server start successfully');
        await connection(server, {uri});
    }catch(error){
        server.log.error(error);
        process.exit(1);
    }
}
main();