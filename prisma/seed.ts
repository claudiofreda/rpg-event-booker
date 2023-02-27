import PrismaClientPkg, { Prisma } from '@prisma/client'

// Prisma doesn't support ES Modules so we have to do this
const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient() 

const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. A diam sollicitudin tempor id eu nisl. Neque aliquam vestibulum morbi blandit. Morbi blandit cursus risus at. Proin fermentum leo vel orci porta non pulvinar neque. Ac turpis egestas sed tempus urna et pharetra pharetra. Ac odio tempor orci dapibus ultrices."

async function seed() {
    let users : Prisma.UserCreateInput[] = [
        {
            handle: 'froggy',
            email: 'me@froggyc.eu',
            bio: loremipsum,
            isAdmin: true,
        },
        {
            handle: 'kernel',
            bio: loremipsum,
            email: 'kernel@example.com'
        },
        {
            handle: 'frane',
            bio: loremipsum,
            email: 'pope@osr.it'
        },
        {
            handle: 'sbax',
            bio: loremipsum,
            email: 'sbax@example.com'
        },
        {
            handle: 'dada',
            bio: loremipsum,
            email: 'dada@example.com'
        },
        {
            handle: 'LordPersi',
            bio: loremipsum,
            email: 'LordPersi@example.com'
        }
    ]
    for (const user of users) {
        await prisma.user.create({ data: user })
    }
    let events : Prisma.EventCreateInput[] = [
        {
            name: 'TPK 2023',
            description: '',
            startTime: new Date("2023-11-12"),
            endTime: new Date("2023-11-12"),
            organizers: { connect: { handle: 'frane' }  },
            slots: {
                create: [
                    {
                        startTime: new Date("2023-11-12T10:00"),
                        endTime: new Date("2023-11-12T15:00"),
                        sessions: {
                            create: [
                                {
                                    name: "Die Brutally Today",
                                    game: "Mörk Borg",
                                    description: loremipsum,
                                    facilitator: { connect: { handle: 'frane' } }
                                },
                                {
                                    name: "Fuckin' Nazis Again",
                                    game: "Into the Odd",
                                    description: loremipsum,
                                    facilitator: { connect: { handle: 'kernel' } }
                                },
                                {
                                    name: "Babies With Lightsabers",
                                    game: "The Pool",
                                    description: loremipsum,
                                    facilitator: { connect: { handle: 'froggy' } }
                                }
                            ]
                        }
                    },
                    {
                        startTime: new Date("2023-11-12T15:30"),
                        endTime: new Date("2023-11-12T18:00")
                    },
                    {
                        startTime: new Date("2023-11-12T18:30"),
                        endTime: new Date("2023-11-12T22:00")
                    }
                ]
            }
        },
        {
            name: 'TPK 2024',
            description: '',
            startTime: new Date("2024-11-12"),
            endTime: new Date("2024-11-12"),
            organizers: { connect: { handle: 'frane' }  },
            slots: {
                create: [
                    {
                        startTime: new Date("2024-11-12T10:00"),
                        endTime: new Date("2024-11-12T15:00"),
                        sessions: {
                            create: [
                                {
                                    name: "O ... S ... Arrrrrrrrrrrrrrr!",
                                    game: "Pirate Borg",
                                    description: loremipsum,
                                    facilitator: { connect: { handle: 'frane' } }
                                },
                                {
                                    name: "This Just Means Orc Keep in Swedish",
                                    game: "Orc Borg",
                                    description: loremipsum,
                                    facilitator: { connect: { handle: 'kernel' } }
                                }
                            ]
                        }
                    },
                    {
                        startTime: new Date("2024-11-12T15:30"),
                        endTime: new Date("2024-11-12T18:00"),
                        sessions: {
                            create: [
                                {
                                    name: "They Took Our Jobs!",
                                    game: "Burk Merp",
                                    description: loremipsum,
                                    facilitator: { connect: { handle: 'froggy' } }
                                }
                            ]
                        }
                    },
                    {
                        startTime: new Date("2024-11-12T18:30"),
                        endTime: new Date("2024-11-12T22:00")
                    }
                ]
            }
        },
    ]
    for (const event of events) {
        await prisma.event.create({ data: event })
    }
}

seed()