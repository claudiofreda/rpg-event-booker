import PrismaClientPkg, { Prisma } from '@prisma/client'
import type { PageServerLoad, Actions }  from './$types'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient() 

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

export const actions : Actions = {
    createSession: async ({ cookies, request }) => {
        const form = await request.formData();

        await prisma.session.create({
            data: {
                name: String(form.get('name')),
                description: String(form.get('description')),
                game: String(form.get('game')),
                facilitator: { connect: { handle: 'frane' } },
                slot: { connect: { id: parseInt(String(form.get('slotId'))) } }
            }
        });

        return {
            success: true
        }
    },
    modifySession: async ({ cookies, request }) => {
        const form = await request.formData();

        await prisma.session.update({
            where: {
                id: parseInt(String(form.get('sessionId')))
            },
            data: {
                name: String(form.get('name')),
                description: String(form.get('description')),
                game: String(form.get('game')),
                slot: { connect: { id: parseInt(String(form.get('slotId'))) } }
            }
        });

        return {
            success: true
        }
    },
    deleteSession: async ({ cookies, request }) => {
        const form = await request.formData();

        await prisma.session.delete({
            where: {
                id: parseInt(String(form.get('sessionId')))
            }
        });

        return {
            success: true
        }
    }
}