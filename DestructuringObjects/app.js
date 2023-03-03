const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;


// const { email, firstName, lastName, bio, city } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const { city, state, died = 'N/A'} = user2;

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${user.firstName} ${user.lastName}`
// }

function fullNAme({ firstName, lastName }) {
    return `${user.firstName} ${user.lastName}`;
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        ýear: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle all the way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter((movie) => movies.score > 90)
// movies.filter(({ score }) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })


movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

