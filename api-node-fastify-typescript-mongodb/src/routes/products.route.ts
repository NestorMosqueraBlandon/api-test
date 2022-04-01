import {FastifyInstance, FastifyPluginOptions, FastifyPluginAsync} from 'fastify'
import fp from 'fastify-plugin';
import Create from '../controllers/products/create';
import GetAll from '../controllers/products/list';

const ProductRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) =>{
    server.get('/products', {}, GetAll);
}

export default ProductRoute;