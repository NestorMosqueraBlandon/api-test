import { FastifyReply, FastifyRequest, RouteHandlerMethod } from "fastify";
import { Product } from "../../models/Product";

const GetAll: RouteHandlerMethod = async (request: FastifyRequest, replay: FastifyReply) =>{
    try{
        const products = await Product.find({});
        console.log(products.length)
        return replay.code(200).send(products)
    }catch(error){
        console.error(error);
        return replay.code(500);
    }

}

export default GetAll;