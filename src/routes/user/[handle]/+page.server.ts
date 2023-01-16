import PrismaClientPkg, { Prisma } from '@prisma/client'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient() 

import type { PageServerLoad }  from './$types'
export const load: PageServerLoad = async ({ params }) => {
    return {
        user: await prisma.user.findUnique({
            where: {
                handle: params.handle
            },
            include: {
                organizerOf: true,
                facilitatorOf: {
                    include: {
                        slot: {
                            include: {
                                event: true
                            }
                        },
                        facilitator: true,
                        bookings: true
                    }
                }
            }
        })
    }
}