import {FastifyInstance, FastifyPluginOptions, FastifyPluginAsync, RouteOptions} from 'fastify'
import GetAll from '../controllers/products/list';


export const fetchAll: RouteOptions = {
    url: '/products',
    method: 'GET',
    handler: GetAll
}

export default fetchAll