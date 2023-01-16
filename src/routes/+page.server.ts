import PrismaClientPkg, { Prisma } from '@prisma/client'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient() 

import type { PageServerLoad }  from './$types'
export const load: PageServerLoad = async ({ params }) => {
    return {
        events: await prisma.event.findMany()
    }
}