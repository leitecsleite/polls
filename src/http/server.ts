 import fastify from 'fastify'; 
 import { PrismaClient } from '@prisma/client'
 import { z } from 'zod'; 

 const app = fastify();

const prisma = new PrismaClient();

 app.post('/polls', async (request, reply) => {
    const createPollSchema = z.object({
        title: z.string()
    })
   
    const { title } = createPollSchema.parse(request.body);

   const poll = await prisma.poll.create({
        data: {
            title,
        }
    })

    console.log(poll)
    return "olá mundo"; 
     
 })

app.listen({ port: 3333}).then(() => {
    console.log('Server is running')
})
