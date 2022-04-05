import {FastifyInstance, FastifyPluginOptions, FastifyPluginAsync, RouteOptions} from 'fastify'
import GetAll from '../controllers/products/list';
import GetAllAdmins from '../controllers/products/update';


export const fetchAllAdmins: RouteOptions = {
    url: '/admins',
    method: 'GET',
    handler: GetAllAdmins
}

export default fetchAllAdmins