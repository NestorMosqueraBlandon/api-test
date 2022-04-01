import Fastify from 'fastify';
import connection from './database';
import ProductRoute from './routes/products.route';
import fastifyCors from 'fastify-cors';

const port = process.env.PORT || 7000;
const server = Fastify({
    logger: true
});

const uri = "mongodb+srv://user:api12345@cluster0.2tqpl.mongodb.net/apirest?retryWrites=true&w=majority"

ProductRoute(server, {});
connection(server, {uri});
server.register(fastifyCors)

const main = async () => {
    try{        
        await server.listen(port);
        console.log('Server start successfully');
    }catch(error){
        server.log.error(error);
        process.exit(1);
    }
}
main();