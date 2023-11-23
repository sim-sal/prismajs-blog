// importo Prisma Client
const { PrismaClient } = require("@prisma/client");
// creo l'istanza
const prisma = new PrismaClient();

const listaPost = [
    {
        "title": "Lorem Ipsum",
        "slug": "lorem-ipsum",
        "image": "https://example.com/image1.jpg",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "title": "Dolor Sit Amet",
        "slug": "dolor-sit-amet",
        "image": "https://example.com/image2.jpg",
        "content": "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "title": "Consectetur Adipiscing",
        "slug": "consectetur-adipiscing",
        "image": "https://example.com/image3.jpg",
        "content": "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "title": "Sed Do Eiusmod",
        "slug": "sed-do-eiusmod",
        "image": "https://example.com/image4.jpg",
        "content": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        "title": "Tempor Incididunt",
        "slug": "tempor-incididunt",
        "image": "https://example.com/image5.jpg",
        "content": "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "title": "Ut Labore Et Dolore",
        "slug": "ut-labore-et-dolore",
        "image": "https://example.com/image6.jpg",
        "content": "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "title": "Magna Aliqua",
        "slug": "magna-aliqua",
        "image": "https://example.com/image7.jpg",
        "content": "Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "title": "Quis Nostrud Exercitation",
        "slug": "quis-nostrud-exercitation",
        "image": "https://example.com/image8.jpg",
        "content": "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        "title": "Ullamco Laboris",
        "slug": "ullamco-laboris",
        "image": "https://example.com/image9.jpg",
        "content": "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        "title": "Duis Aute Irure",
        "slug": "duis-aute-irure",
        "image": "https://example.com/image10.jpg",
        "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    }
]

// FUNZIONE CREATE PER UN SINGOLO POST
// prisma.post.create({
//     data: {
//         title: listaPost[0].title,
//         slug: listaPost[0].slug,
//         image: listaPost[0].image,
//         content: listaPost[0].content,
//     }
// }).then((nuovoPost) => {
//     console.log("Nuovo Post creato:", nuovoPost);
// })

// FUNZIONE CREATE PER TUTTI POST
prisma.post.createMany({
    data: listaPost
}).then((nuovoPost) => {
    console.log("Nuovi Post creati:", nuovoPost);
})