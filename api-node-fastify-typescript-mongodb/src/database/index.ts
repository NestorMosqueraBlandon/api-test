import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import mongoose from "mongoose";
import { connected } from "process";

export interface URLPluginOption{
    uri: string;
}

export const connection: FastifyPluginAsync<URLPluginOption> = async (
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) => {
    try{
        const db = await mongoose.connect(options.uri);
        console.log("Connected to databse to", db.connections[0].name)
    }catch(error){
        fastify.log.error(error);
    } 
}


export default connection;