import { FastifyReply, FastifyRequest, RouteHandlerMethod } from "fastify";
import { Admin } from "../../models/Admin";
import { Product } from "../../models/Product";

const GetAllAdmins: RouteHandlerMethod = async (request: FastifyRequest, replay: FastifyReply) =>{
    try{
        const admins = await Admin.find({});
        console.log(admins.length)
        return replay.code(200).send(admins)
    }catch(error){
        console.error(error);
        return replay.code(500);
    }
}

export default GetAllAdmins;