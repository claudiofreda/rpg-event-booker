import PrismaClientPkg, { Prisma } from '@prisma/client'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient() 

import type { PageServerLoad }  from './$types'
export const load: PageServerLoad = async ({ params }) => {
    return {
        event: await prisma.event.findUnique({
            where: {
                id: parseInt(params.id)
            },
            include: {
                organizers: true,
                slots: {
                    include: {
                        sessions: {
                            include: {
                                facilitator: true,
                                bookings: true
                            }
                        }
                    }
                }
            }
        })
    }
}